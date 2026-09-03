import { Utensils } from "lucide-react";

function Hero() {
  return (
    <section
      className="
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
      {/* Chef icon */}
      <div
        className="
          mx-auto
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-[1.5rem]
          bg-orange-500
          shadow-xl
          shadow-orange-500/20
          sm:h-28
          sm:w-28
          sm:rounded-[2rem]
        "
      >
        <Utensils
  size={52}
  strokeWidth={2}
  className="text-white"
  aria-hidden="true"
/>
      </div>

     
      <h2
  className="
    mx-auto
    mt-6
    max-w-4xl
    text-4xl
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
          text-base
          leading-7
          text-gray-500
          dark:text-gray-400
          sm:mt-6
          sm:text-lg
        "
      >
        Turn your ideas into delicious recipes with IA
      </p>
    </section>
  );
}

export default Hero;

