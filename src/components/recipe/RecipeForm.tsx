import { useState, type SyntheticEvent } from "react";
import { validateRecipePrompt } from "../../utils/validation";

interface RecipeFormProps {
  onGenerate: (prompt: string) => void;
  loading: boolean;
}

function RecipeForm({
  onGenerate,
  loading,
}: RecipeFormProps) {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(
    event: SyntheticEvent<HTMLFormElement>,
  ): void {
    event.preventDefault();
// Check form
    const validationError =
      validateRecipePrompt(prompt);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);

    
    onGenerate(prompt.trim());
  }

  function handlePromptChange(
    value: string,
  ): void {
    setPrompt(value);

    
    if (error) {
      setError(null);
    }
  }

  return (
    <section
      className="
        mx-auto
        w-full
        max-w-3xl
        px-4
        sm:px-6
      "
    >
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-4
          shadow-sm
          dark:border-gray-800
          dark:bg-gray-900
          sm:p-5
          md:p-6
        "
      >
        <label
          htmlFor="recipe-prompt"
          className="
            mb-3
            block
            text-left
            text-sm
            font-semibold
            text-gray-700
            dark:text-gray-200
          "
        >
          What would you like to cook?
        </label>

        <textarea
          id="recipe-prompt"
          value={prompt}
          onChange={(event) =>
            handlePromptChange(event.target.value)
          }
          disabled={loading}
          rows={4}
          maxLength={500}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? "recipe-prompt-error" : undefined
          }
          placeholder="Example: A healthy chicken pasta..."
          className="
            w-full
            resize-none
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            p-4
            text-sm
            text-gray-900
            outline-none
            transition
            placeholder:text-gray-400
            focus:border-orange-500
            focus:ring-2
            focus:ring-orange-500/20
            disabled:cursor-not-allowed
            disabled:opacity-60
            dark:border-gray-700
            dark:bg-gray-950
            dark:text-white
            dark:placeholder:text-gray-500
          "
        />

        {error && (
          <p
            id="recipe-prompt-error"
            role="alert"
            className="mt-2 text-left text-sm text-red-500"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={ loading}
          className="
            mt-4
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-orange-500
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-orange-600
            disabled:cursor-not-allowed
            disabled:opacity-50
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-orange-500
            sm:text-base
          "
        >
          

          {loading
            ? "Generating..."
            : "Generate recipe"}
        </button>
      </form>
    </section>
  );
}

export default RecipeForm;