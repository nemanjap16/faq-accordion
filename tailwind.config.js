/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
        "work-sans-italic": ["Work Sans Italic", "sans-serif"],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        "light-pink": "hsl(275, 100%, 97%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
        "hover-purple": "hsl(281, 83%, 54%)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
