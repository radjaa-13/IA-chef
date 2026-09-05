import { Utensils } from "lucide-react";
// Hero section
function Hero() {
  return (
    <section
      className="
        w-full
        px-4
        pb-10
        pt-10
        text-center
        sm:px-6
        sm:pb-16
        sm:pt-16
        lg:px-8
        lg:pt-20
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-2xl
          bg-orange-500
          shadow-xl
          shadow-orange-500/20
          sm:h-24
          sm:w-24
          sm:rounded-3xl
          lg:h-28
          lg:w-28
        "
      >
        <Utensils
          size={42}
          strokeWidth={2}
          className="text-white sm:h-12 sm:w-12"
          aria-hidden="true"
        />
      </div>

      <h2
        className="
          mx-auto
          mt-6
          max-w-4xl
          text-3xl
          font-black
          leading-tight
          tracking-tight
          text-gray-900
          dark:text-white
          sm:mt-8
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
        "
      >
        Start your recipe
        <span className="block text-orange-500">
          with Radjaa
        </span>
      </h2>

      <p
        className="
          mx-auto
          mt-5
          max-w-2xl
          px-2
          text-sm
          leading-6
          text-gray-500
          dark:text-gray-400
          sm:mt-6
          sm:px-0
          sm:text-lg
          sm:leading-7
        "
      >
        Turn your ideas into delicious recipes with AI-chef
      </p>
    </section>
  );
}

export default Hero;