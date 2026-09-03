import { useEffect, useState } from "react";
import { ChefHat,Moon,Sun,} from "lucide-react";

function Navbar() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode,
    );

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  function toggleDarkMode(): void {
    setDarkMode((currentMode) => !currentMode);
  }

  return (
    <header className="w-full">
      <nav
        className="
          mx-auto
          flex
          w-full
          max-w-7xl
          items-center
          justify-between
          gap-4
          px-4
          py-4
          sm:px-6
          sm:py-5
          lg:px-8
        "
      >
       
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-orange-100
              dark:bg-orange-950
              sm:h-14
              sm:w-14
            "
          >
            <ChefHat
              size={30}
              strokeWidth={2}
              className="text-orange-500 sm:h-9 sm:w-9"
              aria-hidden="true"
            />
          </div>

          <div className="min-w-0">
            <h1
              className="
                truncate
                text-lg
                font-bold
                text-gray-900
                dark:text-white
                sm:text-2xl
              "
            >
              IA-Chef
            </h1>

            <p
              className="
                hidden
                text-sm
                text-gray-500
                dark:text-gray-400
                sm:block
              "
            >
              Cook with AI
            </p>
          </div>
        </div>

        
        <button
          type="button"
          onClick={toggleDarkMode}
          aria-label={
            darkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          aria-pressed={darkMode}
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-gray-200
            bg-white
            text-gray-700
            transition-all
            duration-200
            hover:scale-105
            hover:bg-gray-50
            active:scale-95
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-orange-500
            dark:border-gray-700
            dark:bg-gray-900
            dark:text-gray-200
            dark:hover:bg-gray-800
            sm:h-11
            sm:w-11
          "
        >
          {darkMode ? (
            <Sun size={20} aria-hidden="true" />
          ) : (
            <Moon size={20} aria-hidden="true" />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;