const tailwindcssForms = require("@tailwindcss/forms");

module.exports = {
  content: ["./app/javascript/**/*.jsx"],
  theme: {
    extend: {
      fontSize: { xxs: "0.625rem" },
      colors: {
        "palette-1": "#73B1D7",
        "palette-2": "#FCADCB",
        "palette-3": "#BE81D8",
      },
    },
  },
  plugins: [tailwindcssForms],
};
