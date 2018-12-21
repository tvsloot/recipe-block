import {forEach} from 'lodash';
import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';
import {NewRecipeData} from '../recipe';
import {RecipeService} from '../recipe.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ApplicationError} from '../../../error-handling/application-error';
import {RouteBuilder} from '../../../routing/route-builder';

@Component({
    selector: 'rb-create-recipe',
    templateUrl: './create-recipe.component.html',
    styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

    public recipeForm: FormGroup;
    public ingredientsForm: FormArray;

    constructor(private recipeService: RecipeService,
                private formBuilder: FormBuilder,
                private router: Router) {
    }

    public ngOnInit(): void {
        this.buildForm();
    }

    public createRecipe(): void {
        const data: NewRecipeData = this.recipeForm.value;
        this.recipeService.createRecipe(data)
            .pipe(take(1))
            .subscribe(
                (recipe) => this.router.navigate(RouteBuilder.getRecipeViewRouterCommands(recipe.id)),
                (err) => this.handleError(err)
            );
    }

    public drop(event: CdkDragDrop<Array<FormGroup>>): void {
        moveItemInArray(this.ingredientsForm.controls, event.previousIndex, event.currentIndex);
        this.resetIngredientIndices();
    }

    public addIngredient(): void {
        const index = this.ingredientsForm.length;
        this.ingredientsForm.push(this.getIngredientTemplate(index));
    }

    public removeIngredient(i: number): void {
        this.ingredientsForm.removeAt(i);
        this.resetIngredientIndices();
    }

    private resetIngredientIndices(): void {
        let index = 0;
        this.ingredientsForm.controls.forEach((control) => {
            control.patchValue({index});
            index++;
        });
    }

    private buildForm(): void {
        this.recipeForm = this.formBuilder.group({
            name: ['', Validators.required],
            ingredients: this.formBuilder.array([
                this.getIngredientTemplate(0)
            ], {validators: Validators.required})
        });

        this.ingredientsForm = this.recipeForm.get('ingredients') as FormArray;
    }

    private getIngredientTemplate(index: number): FormGroup {
        return this.formBuilder.group({
            name: ['', Validators.required],
            index: [index],
            quantity: this.formBuilder.group({
                unit: ['', Validators.required],
                value: [0, Validators.min(0.0001)]
            })
        });
    }

    private handleError(err: ApplicationError): void {
        console.log('TRVA err: ', err);
    }

}
