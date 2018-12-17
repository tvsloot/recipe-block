import {forEach} from 'lodash';
import {Component, OnInit} from '@angular/core';
import {NewRecipeData} from '../recipe';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';

@Component({
    selector: 'rb-create-recipe',
    templateUrl: './create-recipe.component.html',
    styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

    public recipeForm: FormGroup;

    constructor(private recipeService: RecipeService) {
    }

    public get model(): NewRecipeData {
        return {
            name: '',
            ingredients: []
        };
    }

    public ngOnInit() {
        this.buildForm();
    }

    public createRecipe() {
        const data: NewRecipeData = this.recipeForm.value();
        this.recipeService.createRecipe(data);
    }

    private buildForm(): void {
        const formControls: { [key: string]: AbstractControl } = {};
        forEach(this.model, (value, key) => {
            formControls[key] = new FormControl(value, Validators.required);
        });

        this.recipeForm = new FormGroup(formControls);
    }

}
