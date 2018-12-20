import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomAngularMaterialModule} from '../../vendor/custom-angular-material.module';
import {CreateRecipeComponent} from './create-recipe/create-recipe.component';
import {ViewRecipeComponent} from './view-recipe/view-recipe.component';
import {ListRecipesComponent} from './list-recipes/list-recipes.component';
import {RecipeService} from './recipe.service';
import {StatefulRecipeService} from './services/stateful-recipe.service';

@NgModule({
    imports: [
        CommonModule,
        CustomAngularMaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        CreateRecipeComponent,
        ViewRecipeComponent,
        ListRecipesComponent
    ],
    providers: [
        {provide: RecipeService, useClass: StatefulRecipeService}
    ]
})
export class RecipeModule {
}
