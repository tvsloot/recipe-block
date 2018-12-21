import {Observable} from 'rxjs';
import {NewRecipeData, Recipe} from './recipe';

export abstract class RecipeService {

    public abstract createRecipe(data: NewRecipeData): Observable<Recipe>;

}
