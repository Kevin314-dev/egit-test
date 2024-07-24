/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/test/test.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
