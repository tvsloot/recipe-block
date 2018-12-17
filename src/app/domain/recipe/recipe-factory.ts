import {NewRecipeData, Recipe} from './recipe';
import {v4} from 'uuid';
import {UserService} from '../../user/user.service';

export class RecipeFactory {

    public static buildNewRecipe(data: NewRecipeData): Recipe {
        return {
            id: v4(),
            userId: UserService.getCurrentUser().id,
            created: new Date(),
            updated: new Date(),
            name: data.name,
            ingredients: data.ingredients
        };
    }

}
