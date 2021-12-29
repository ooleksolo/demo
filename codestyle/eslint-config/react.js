const rules = require("./rules/typescript");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard",
    "standard-jsx",
    "standard-react",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    ...rules,
  },
};
