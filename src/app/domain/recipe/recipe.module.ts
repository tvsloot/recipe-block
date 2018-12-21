import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomAngularMaterialModule} from '../../vendor/custom-angular-material.module';
import {CreateRecipeComponent} from './create-recipe/create-recipe.component';
import {ViewRecipeComponent} from './view-recipe/view-recipe.component';
import {ListRecipesComponent} from './list-recipes/list-recipes.component';
import {RecipeService} from './recipe.service';
import {StatefulRecipeService} from './services/stateful-recipe.service';
import { ViewIngredientComponent } from './ingredients/view-ingredient/view-ingredient.component';

@NgModule({
    imports: [
        CommonModule,
        CustomAngularMaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        CreateRecipeComponent,
        ViewRecipeComponent,
        ListRecipesComponent,
        ViewIngredientComponent
    ],
    providers: [
        {provide: RecipeService, useClass: StatefulRecipeService}
    ]
})
export class RecipeModule {
}
