module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#94aa2a",
        secondary: {
          100: "#232323",
          200: "#888883",
        },
        three: {
          100: "#2940d3",
          500: "#39a9cb",
        },
      },
      fontFamily: {
        body: ["Poppins"],
        secondary: ["Nunito"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
