import type {
  GenerateRecipeRequest,
  GenerateRecipeResponse,
} from "../types/recipe";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL;

// Call recipe API

export async function generateRecipe(
  request: GenerateRecipeRequest,
): Promise<GenerateRecipeResponse> {
  if (!API_BASE_URL) {
    throw new Error(
      "VITE_API_BASE_URL is not configured.",
    );
  }

  // Send the recipe request

  const response = await fetch(
    `${API_BASE_URL}/api/recipes`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    },
  );

  if (!response.ok) {
    throw new Error(
      `Recipe generation failed with status ${response.status}.`,
    );
  }

  const data =
    (await response.json()) as GenerateRecipeResponse;

  return data;
}