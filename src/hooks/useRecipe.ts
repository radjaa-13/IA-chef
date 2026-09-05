import { useState } from "react";
import { generateRecipe } from "../services/recipe.service";
import type { Recipe } from "../types/recipe";


export function useRecipe() {
  const [recipe, setRecipe] =
    useState<Recipe | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

    // Generate recipe
  async function generate(
    prompt: string,
  ): Promise<void> {
    setLoading(true);
    setError(null);

    try {
      const response =
        await generateRecipe({
          prompt,
        });

      setRecipe(response.recipe);
    } catch (requestError) {
      console.error(
        "Recipe generation error:",
        requestError,
      );

      setRecipe(null);

      setError(
        "We couldn't generate your recipe. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return {
    recipe,
    loading,
    error,
    generate,
  };
}