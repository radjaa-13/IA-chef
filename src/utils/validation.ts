export function validateRecipePrompt(
  prompt: string,
): string | null {
    
    // Check prompt
  const cleanPrompt = prompt.trim();

  if (!cleanPrompt) {
    return "Please enter a recipe idea.";
  }

  if (cleanPrompt.length < 3) {
    return "Please enter at least 3 characters.";
  }

  if (cleanPrompt.length > 500) {
    return "Your recipe request cannot exceed 500 characters.";
  }

  return null;
}