import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/recipe/Hero";
import RecipeForm from "./components/recipe/RecipeForm";
import RecipeCard from "./components/recipe/RecipeCard";
import { useRecipe } from "./hooks/useRecipe";

function App() {
  const {
    recipe,
    loading,
    error,
    generate,
  } = useRecipe();
  
   // App layout

  return (
    <div
      className="
        flex
        min-h-screen
        w-full
        flex-col
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
          onGenerate={generate}
          loading={loading}
        />

        {recipe &&
          !loading &&
          !error && (
            <RecipeCard
              recipe={recipe}
            />
          )}
      </main>

      <Footer />
    </div>
  );
}

export default App;