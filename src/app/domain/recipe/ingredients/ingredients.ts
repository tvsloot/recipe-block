import {Quantity} from '../recipe';

export type Ingredients = Array<Ingredient>;

export interface Ingredient {
    id: IngredientId;
    name: string;
    quantity: Quantity;
}

export type IngredientId = string;
