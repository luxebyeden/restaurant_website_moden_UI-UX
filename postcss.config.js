module.exports = {
  plugins: [
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/postcss"), // Add this line
  ],
};
