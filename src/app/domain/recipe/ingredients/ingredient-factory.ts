import {Ingredient} from './ingredients';
import {v4} from 'uuid';

export class IngredientFactory {
    public static buildIngredient(data: Partial<Ingredient> = {}): Ingredient {
        return {
            id: data.id || v4(),
            name: data.name || '',
            quantity: data.quantity || {
                unit: '',
                value: 0
            }
        };
    }
}
