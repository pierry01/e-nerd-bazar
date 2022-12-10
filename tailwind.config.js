const tailwindcssForms = require("@tailwindcss/forms");

module.exports = {
  content: ["./app/javascript/**/*.jsx"],
  theme: {
    extend: {
      fontSize: { xxs: "0.625rem" },
      colors: { brand: "#5372E1" },
    },
  },
  plugins: [tailwindcssForms],
};
