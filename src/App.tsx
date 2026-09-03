import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/recipe/Hero";
import RecipeForm from "./components/recipe/RecipeForm";
import RecipeCard from "./components/recipe/RecipeCard";
import type { Recipe } from "./types/recipe";

function App() {
  
  const recipe: Recipe | null = null;

  
  const loading = false;

  function handleGenerate(prompt: string): void {
    console.log("Recipe prompt:", prompt);
  }

  return (
    <div
      className="
        flex
        min-h-screen
        w-full
        flex-col
        overflow-x-hidden
        bg-white
        text-gray-900
        transition-colors
        duration-200
        dark:bg-gray-950
        dark:text-gray-100
      "
    >
      <Navbar />

      <main className="w-full flex-1">
        <Hero />

        <RecipeForm
          onGenerate={handleGenerate}
          loading={loading}
        />

        {recipe && <RecipeCard recipe={recipe} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;