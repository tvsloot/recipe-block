import {Routes} from '@angular/router';
import {routeNames} from './route-names';
import {ListRecipesComponent} from '../domain/recipe/list-recipes/list-recipes.component';
import {CreateRecipeComponent} from '../domain/recipe/create-recipe/create-recipe.component';
import {ViewRecipeComponent} from '../domain/recipe/view-recipe/view-recipe.component';
import {PageNotFoundComponent} from '../page-not-found.component';

export const appRoutes: Routes = [
  {
    path: routeNames.recipe.list,
    component: ListRecipesComponent
  },
  {
    path: routeNames.recipe.create,
    component: CreateRecipeComponent
  },
  {
    path: routeNames.recipe.view,
    component: ViewRecipeComponent
  },
  {path: '', redirectTo: routeNames.defaultRoute, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
