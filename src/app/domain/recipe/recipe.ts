export interface Recipe {
  id: string;
  userId: string;
  created: Date;
  updated: Date;
  name: string;
  description: string;
  thumbnail: string;
  ingredients: Array<Ingredient>;
  steps: Array<Step>;
}

export interface Ingredient {
  name: string;
  quantity: Quantity;
}

export interface Quantity {
  unit: string;
  value: number;
}

export interface Step {
  position: number;
  value: string;
}
