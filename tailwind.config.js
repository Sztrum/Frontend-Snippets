module.exports = {
  purge: [
    "./dist/**/*.html",
    "./src/js/*.js",
  ],
  content: ["./src/css/*.{html,js}"],
  theme: {
    fontFamily: {
      seg: ["Segoe UI", "Sans", "Arial"],
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/forms"),
  ],
};
