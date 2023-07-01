module.exports = {
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["import", "prettier", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {
    "prettier/prettier": "off",
    "import/no-unresolved": "off",
    "no-console": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "no-useless-constructor": "off",
    "max-len": ["error", { code: 100 }],
  },
};
