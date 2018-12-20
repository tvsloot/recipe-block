import {forEach} from 'lodash';
import {Component, OnInit} from '@angular/core';
import {NewRecipeData} from '../recipe';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Router} from '@angular/router';

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

    public ngOnInit() {
        this.buildForm();
    }

    public createRecipe() {
        const data: NewRecipeData = this.recipeForm.value();
        this.recipeService.createRecipe(data);
    }

    public drop(event: CdkDragDrop<Array<any>>): void {
        moveItemInArray(this.ingredientsForm.controls, event.previousIndex, event.currentIndex);
    }

    public addIngredient(): void {
        this.ingredientsForm.push(this.getIngredientTemplate());
    }

    public removeIngredient(index: number): void {
        this.ingredientsForm.removeAt(index);
    }

    private buildForm(): void {
        this.recipeForm = this.formBuilder.group({
            name: ['', Validators.required],
            ingredients: this.formBuilder.array([
                this.getIngredientTemplate()
            ], {validators: Validators.required})
        });

        this.ingredientsForm = this.recipeForm.get('ingredients') as FormArray;
    }

    private getIngredientTemplate(): FormGroup {
        return this.formBuilder.group({
            ingredientName: ['', Validators.required],
            quantityUnit: ['', Validators.required],
            quantityValue: [0, Validators.min(0.0001)]
        });
    }

}
