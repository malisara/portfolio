/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#D7E8DC",
        baseColor: "#003161",
        secondaryColor: "#3C8581",
        beige: "#efefef",
      },
      fontFamily: {
        body: ["Nunito", "sans serif"],
      },
    },
  },
  plugins: [],
};
