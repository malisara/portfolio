/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#D7E8DC",
      },
      fontFamily: {
        body: ["Nunito", "sans serif"],
      },
    },
  },
  plugins: [],
};
