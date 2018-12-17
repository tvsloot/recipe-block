import {cloneDeep} from 'lodash';
import {EventHandler, EventHandlerDictionary} from '../../../store/event-handler';
import {RecipeView} from './recipe-view';
import {initialState, viewNames} from '../../../app-state';
import {RecipeCreated} from '../create-recipe/recipe-created.event';
import {DuplicateEntityError} from '../../../error-handling/duplicate-entity-error';

export class RecipeEventHandler extends EventHandler<RecipeView> {

    public getInitialState(): RecipeView {
        return initialState[viewNames.recipes];
    }

    protected initializeHandlers(): EventHandlerDictionary<RecipeView> {
        return {
            [RecipeCreated.type]: (view, event: RecipeCreated) => this.applyRecipeCreated(view, event)
        };
    }

    private applyRecipeCreated(view: RecipeView, event: RecipeCreated): RecipeView {
        const viewCopy = cloneDeep(view);
        const newRecipe = cloneDeep(event.recipe);

        if (viewCopy.data[newRecipe.id]) {
            throw new DuplicateEntityError(newRecipe.id);
        }

        viewCopy.data[newRecipe.id] = newRecipe;

        return viewCopy;
    }

}
