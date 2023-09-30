module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@feature-sliced',
    "plugin:react/recommended",
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "comma-dangle": ["warn", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    '@typescript-eslint/no-unused-vars': ['warn'],
    quotes: ["warn", "double"],
    semi: "warn",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/ban-ts-comment": "off"
  },
}
