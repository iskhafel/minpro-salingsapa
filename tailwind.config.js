/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
