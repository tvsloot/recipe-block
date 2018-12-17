export interface Recipe {
    id: string;
    userId: string;
    created: Date;
    updated: Date;
    name: string;
    ingredients: Ingredients;
    steps?: Steps;
    description?: string;
    thumbnail?: string;
}

export interface NewRecipeData {
    name: string;
    ingredients: Ingredients;
}

export type Ingredients = Array<Ingredient>;

export interface Ingredient {
    name: string;
    quantity: Quantity;
}

export interface Quantity {
    unit: string;
    value: number;
}

export type Steps = Array<Step>;

export interface Step {
    position: number;
    value: string;
}
