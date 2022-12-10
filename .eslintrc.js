const fs = require("fs");
const path = require("path");

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "airbnb",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "prettier",
  ],
  plugins: [
    "react",
    "prettier",
    "react-hooks",
    "testing-library",
    "jest-dom",
    "graphql",
  ],
  env: { es6: true, browser: true, node: true, jest: true },
  globals: { page: true, browser: true, context: true, google: true },
  parserOptions: { ecmaVersion: 2020, ecmaFeatures: { jsx: true } },
  rules: {
    "import/no-dynamic-require": [0],
    "react/no-danger": [0],
    "prettier/prettier": "error",
    "import/no-unresolved": [0],
    "react/jsx-props-no-spreading": 1,
    "no-underscore-dangle": "off",
    "graphql/template-strings": [
      "error",
      {
        env: "apollo",

        schemaString: fs.readFileSync(
          path.resolve(__dirname, "./app/graphql/schema.graphql"),
          "utf8"
        ),
      },
    ],
  },
};
