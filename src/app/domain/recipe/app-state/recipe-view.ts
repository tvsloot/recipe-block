import {AppView} from '../../../app-state';
import {Dictionary} from '../../../utils/dictionary';
import {Recipe} from '../recipe';

export type RecipeView = AppView<Dictionary<Recipe>>;
