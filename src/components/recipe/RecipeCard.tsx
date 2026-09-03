import type { Recipe } from "../../types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <section
      className="
        mx-auto
        mt-8
        w-full
        px-4
        pb-8
        sm:px-6
        sm:pb-12
        lg:px-8
      "
    >
      <article
        className="
          mx-auto
          w-full
          max-w-4xl
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          bg-white
          shadow-sm
          dark:border-gray-800
          dark:bg-gray-900
        "
      >
        {recipe.imageUrl && (
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="
              block
              h-56
              w-full
              object-cover
              sm:h-72
              md:h-80
            "
          />
        )}

        <div className="p-5 sm:p-8">
          <h3
            className="
              break-words
              text-2xl
              font-bold
              leading-tight
              text-gray-900
              dark:text-white
              sm:text-3xl
            "
          >
            {recipe.title}
          </h3>

          <p
            className="
              mt-3
              break-words
              text-sm
              leading-6
              text-gray-500
              dark:text-gray-400
              sm:text-base
              sm:leading-7
            "
          >
            {recipe.description}
          </p>

          
          <div
            className="
              mt-5
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
            "
          >
            <div
              className="
                rounded-2xl
                bg-gray-50
                p-4
                dark:bg-gray-950
              "
            >
              <p className="text-xs text-gray-400">
                Cooking time
              </p>

              <p className="mt-1 font-semibold">
                {recipe.cookingTime}
              </p>
            </div>

            <div
              className="
                rounded-2xl
                bg-gray-50
                p-4
                dark:bg-gray-950
              "
            >
              <p className="text-xs text-gray-400">
                Servings
              </p>

              <p className="mt-1 font-semibold">
                {recipe.servings}
              </p>
            </div>
          </div>

          <section className="mt-8">
            <h4 className="text-xl font-bold">
              Ingredients
            </h4>

            <ul className="mt-4 space-y-2">
              {recipe.ingredients.map(
                (ingredient, index) => (
                  <li
                    key={`${ingredient}-${index}`}
                    className="
                      break-words
                      text-sm
                      leading-6
                      text-gray-600
                      dark:text-gray-300
                      sm:text-base
                    "
                  >
                    {ingredient}
                  </li>
                ),
              )}
            </ul>
          </section>

          <section className="mt-8">
            <h4 className="text-xl font-bold">
              Preparation
            </h4>

            <ol className="mt-4 space-y-4">
              {recipe.steps.map((step, index) => (
                <li
                  key={`${step}-${index}`}
                  className="
                    flex
                    items-start
                    gap-3
                    text-sm
                    leading-6
                    text-gray-600
                    dark:text-gray-300
                    sm:text-base
                  "
                >
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-orange-100
                      text-sm
                      font-bold
                      text-orange-600
                      dark:bg-orange-950
                      dark:text-orange-400
                    "
                  >
                    {index + 1}
                  </span>

                  <span className="min-w-0 break-words">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </section>
  );
}

export default RecipeCard;