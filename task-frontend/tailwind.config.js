/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "components/**/*.{js,jsx}"
  ],
  theme: {
    screens: {
      sm: "340px", // mobile 
      // => @media (min-width: 640px) { ... }

      md: "768px", // tablet
      // => @media (min-width: 768px) { ... }

      lg: "1024px", // laptop
      // => @media (min-width: 1024px) { ... }

      xl: "1280px", // desktop
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px", // large desktop
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        copperplate: ['Copperplate', 'sans-serif'],
        papyrus: ['Papyrus', 'fantasy'],
        fantasy: ['Fantasy', 'cursive'],
      },
    },
  },
  plugins: [],
}

