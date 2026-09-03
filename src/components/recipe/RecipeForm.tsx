import { useState, type FormEvent } from "react";
import { Sparkles } from "lucide-react";

interface RecipeFormProps {
  onGenerate: (prompt: string) => void;
  loading: boolean;
}

function RecipeForm({
  onGenerate,
  loading,
}: RecipeFormProps) {
  const [prompt, setPrompt] = useState("");

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): void {
    event.preventDefault();

    const cleanPrompt = prompt.trim();

    if (!cleanPrompt || loading) {
      return;
    }

    onGenerate(cleanPrompt);
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
          onChange={(event) => {
            setPrompt(event.target.value);
          }}
          disabled={loading}
          rows={4}
          maxLength={500}
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
          

          {loading ? "Generating..." : "Generate recipe"}
        </button>
      </form>
    </section>
  );
}

export default RecipeForm;