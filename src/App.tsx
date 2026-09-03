import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/recipe/Hero";

function App() {
  return (
    <div
      className="
        min-h-screen
        bg-white
        text-gray-900
        transition-colors
        duration-200
        dark:bg-gray-950
        dark:text-gray-100
      "
    >
      <Navbar />

      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default App;