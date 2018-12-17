import {NgModule} from '@angular/core';
import {CreateRecipeComponent} from './create-recipe/create-recipe.component';
import {ViewRecipeComponent} from './view-recipe/view-recipe.component';
import {ListRecipesComponent} from './list-recipes/list-recipes.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomAngularMaterialModule} from '../../vendor/custom-angular-material.module';
import {RecipeService} from './recipe.service';
import {StatefulRecipeService} from './services/stateful-recipe.service';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
    imports: [
        CustomAngularMaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        CreateRecipeComponent,
        ViewRecipeComponent,
        ListRecipesComponent,
        IngredientsComponent
    ],
    providers: [
        {provide: RecipeService, useClass: StatefulRecipeService}
    ]
})
export class RecipeModule {
}
