import {RecipeService} from '../recipe.service';
import {NewRecipeData} from '../recipe';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {AppStateService} from '../../../store/app-state.service';
import {RecipeCreated} from '../create-recipe/recipe-created.event';
import {RecipeFactory} from '../recipe-factory';

@Injectable()
export class StatefulRecipeService extends RecipeService {

    constructor(private appStateService: AppStateService) {
        super();
    }

    public createRecipe(data: NewRecipeData): Observable<void> {
        const recipe = RecipeFactory.buildNewRecipe(data);
        this.appStateService.fireEvent(new RecipeCreated(recipe));
        return of();
    }

}
