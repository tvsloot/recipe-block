import {UserId} from '../../user/user';
import {Ingredients} from './ingredients/ingredients';

export interface Recipe {
    id: RecipeId;
    userId: UserId;
    created: Date;
    updated: Date;
    name: string;
    ingredients: Ingredients;
    steps?: Steps;
    description?: string;
    thumbnail?: string;
}

export type RecipeId = string;

export interface NewRecipeData {
    name: string;
    ingredients: Ingredients;
}

export interface Quantity {
    unit: string;
    value: number;
}

export type Steps = Array<Step>;

export interface Step {
    value: string;
}
