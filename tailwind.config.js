/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        aliceblue: "#f0f8ff",
        charcoal: "#2F4858",
        snow: "#FCF6F5",
        rustyred: "#CC313D",
        // Add more custom colors if needed
      },
      screens: {
        xs: { min: "100px", max: "639px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
        "custom-screen-1": { min: "100px", max: "1279px" },

        "custom-screen-2": { min: "640px", max: "1015px" },

        "custom-screen-3": { min: "100px", max: "639px" },
      },
    },
  },
  variants: {},
  plugins: [],
};
