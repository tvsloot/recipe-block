import {Recipe} from '../recipe';
import {ClientEvent} from '../../../store/client-event';

export class RecipeCreated extends ClientEvent {
    public static readonly type = 'RecipeCreated';
    public readonly type = RecipeCreated.type;

    constructor(public readonly recipe: Recipe) {
        super();
    }
}
