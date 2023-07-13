/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        redColor: "#E3434B",
        lightGreen: "#0f8741",
        darkBlue: "#242D52",
        veryDarkBlue: "#1D1E25",
        lightBlack: "#444444",
        lightColor: "#FFFFFF",
        orange: "#F3603C",
        lightOrange: "#FFEFEB",
        gray: "#3C4048",
        // .... quiez app 
        bgColor:"#F2F5F7",
        mianColor:"#FFFFFF",
        mainText:"#2D3846",
        secondText:"#6B7F99"
      },
    },
  },
  plugins: [],
};
