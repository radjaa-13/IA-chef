export interface Recipe {
  title: string;
  description: string;
  cookingTime: string;
  servings: number;
  ingredients: string[];
  steps: string[];
  imageUrl?: string;
}

// Recipe generation request

export interface GenerateRecipeRequest {
  prompt: string;
}

// Recipe generation response
export interface GenerateRecipeResponse {
  recipe: Recipe;
}