import {routeNames} from './route-names';

export class RouteBuilder {
    public static getRecipeViewRouterCommands(recipeId: string): Array<string> {
        return [routeNames.recipe.view.replace(':id', recipeId)];
    }
}
