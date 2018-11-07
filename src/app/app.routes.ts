import {Routes} from '@angular/router';
import {RouteNames} from './route-names';
import {ListRecipesComponent} from './domain/recipe/list-recipes/list-recipes.component';
import {CreateRecipeComponent} from './domain/recipe/create-recipe/create-recipe.component';
import {ViewRecipeComponent} from './domain/recipe/view-recipe/view-recipe.component';
import {PageNotFoundComponent} from './page-not-found.component';

export const appRoutes: Routes = [
  {
    path: RouteNames.recipe.list,
    component: ListRecipesComponent
  },
  {
    path: RouteNames.recipe.create,
    component: CreateRecipeComponent
  },
  {
    path: RouteNames.recipe.view,
    component: ViewRecipeComponent
  },
  {path: '', redirectTo: RouteNames.defaultRoute, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
