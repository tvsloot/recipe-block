import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateRecipeComponent} from './create-recipe/create-recipe.component';
import {ViewRecipeComponent} from './view-recipe/view-recipe.component';
import {ListRecipesComponent} from './list-recipes/list-recipes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CreateRecipeComponent,
    ViewRecipeComponent,
    ListRecipesComponent
  ]
})
export class RecipeModule {
}
