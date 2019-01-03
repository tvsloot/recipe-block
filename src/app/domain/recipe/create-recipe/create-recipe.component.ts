import {findIndex, forEach, pullAt} from 'lodash';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {take} from 'rxjs/operators';
import {NewRecipeData, Recipe, RecipeId} from '../recipe';
import {RecipeService} from '../recipe.service';
import {ApplicationError} from '../../../error-handling/application-error';
import {RouteBuilder} from '../../../routing/route-builder';
import {Dictionary} from '../../../utils/dictionary';
import {
    ViewIngredientComponent,
    ViewIngredientData,
    ViewIngredientDialogRef
} from '../ingredients/view-ingredient/view-ingredient.component';
import {Ingredient, Ingredients} from '../ingredients/ingredients';
import {IngredientFactory} from '../ingredients/ingredient-factory';

@Component({
    selector: 'rb-create-recipe',
    templateUrl: './create-recipe.component.html',
    styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

    public recipeForm: FormGroup;

    constructor(private recipeService: RecipeService,
                private dialog: MatDialog,
                private router: Router) {
    }

    public get model(): NewRecipeData {
        return {
            name: '',
            ingredients: []
        };
    }

    public ngOnInit(): void {
        this.buildForm();
    }

    public createRecipe(): void {
        const data: NewRecipeData = this.recipeForm.value;
        this.recipeService.createRecipe(data)
            .pipe(take(1))
            .subscribe(
                (recipe) => this.handleRecipeCreationSuccess(recipe),
                (err) => this.handleRecipeCreationError(err)
            );
    }

    public openIngredientDialog(existingIngredient?: Ingredient): void {
        const ingredient = IngredientFactory.buildIngredient(existingIngredient);
        const dialog = this.getIngredientDialog(ingredient);
        this.monitorIngredientDialog(dialog);
    }

    public removeIngredient(index: number): void {
        const ingredients = this.getCurrentIngredients();
        pullAt(ingredients, index);
        this.recipeForm.patchValue({ingredients});
    }

    public drop(event: CdkDragDrop<Array<unknown>>): void {
        const ingredients = this.getCurrentIngredients();
        moveItemInArray(ingredients, event.previousIndex, event.currentIndex);
    }

    private getIngredientDialog(ingredient: Ingredient): ViewIngredientDialogRef {
        return this.dialog.open<ViewIngredientComponent, ViewIngredientData>(ViewIngredientComponent, {
            data: {ingredient}
        });
    }

    private monitorIngredientDialog(dialogRef: ViewIngredientDialogRef): void {
        dialogRef.afterClosed()
            .pipe(take(1))
            .subscribe((data) => {
                if (data) {
                    this.updateIngredients(data.ingredient);
                }
            });
    }

    private updateIngredients(newIngredient: Ingredient): void {
        const ingredients = this.getCurrentIngredients();
        const existingIndex = findIndex(ingredients, ((i) => i.id === newIngredient.id));
        if (existingIndex > -1) {
            ingredients[existingIndex] = newIngredient;
        } else {
            ingredients.push(newIngredient);
        }
        this.recipeForm.patchValue({ingredients});
    }

    private buildForm(): void {
        const formControls: Dictionary<FormControl> = {};
        forEach(this.model, (value, key) => {
            formControls[key] = new FormControl(value);
        });

        this.setFormValidators(formControls);
        this.recipeForm = new FormGroup(formControls);
    }

    private setFormValidators(formControls: Dictionary<FormControl>): void {
        forEach(formControls, (control) => control.setValidators(Validators.required));
    }

    private getCurrentIngredients(): Ingredients {
        return this.recipeForm.get('ingredients').value;
    }

    private handleRecipeCreationSuccess(recipe: Recipe): void {
        this.navigateToRecipe(recipe.id);
    }

    private navigateToRecipe(id: RecipeId): void {
        this.router.navigate(RouteBuilder.getRecipeViewRouterCommands(id));
    }

    private handleRecipeCreationError(err: ApplicationError): void {
        console.log('TRVA err: ', err);
    }
}
