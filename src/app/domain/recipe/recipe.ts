import {UserId} from '../../user/user';

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

export type Ingredients = Array<Ingredient>;

export interface Ingredient {
    name: string;
    quantity: Quantity;
    index: number;
}

export interface Quantity {
    unit: string;
    value: number;
}

export type Steps = Array<Step>;

export interface Step {
    value: string;
    index: number;
}
