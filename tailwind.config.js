module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_600: "#808080",
        yellow_400: "#f9e061",
        black_900: "#000000",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
      },
      borderRadius: { radius20: "20px", radius28: "28px" },
      fontFamily: { montserrat: "Montserrat" },
      boxShadow: { bs: "0px 4px  4px 2px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
