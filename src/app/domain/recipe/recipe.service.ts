import {Observable} from 'rxjs';
import {NewRecipeData} from './recipe';

export abstract class RecipeService {

    public abstract createRecipe(data: NewRecipeData): Observable<void>;

}
