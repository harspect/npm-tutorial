import globals from "globals";
import tseslint from "typescript-eslint";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactJSXRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import js from "@eslint/js";
import { version } from "vite";



/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {ignores: ["node_modules", "dist"]},
  {files: ["**/*.{js,jsx}"]},
  {settings: {react: {version: "detect"}}},
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactRecommended,
  reactJSXRuntime,
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
];