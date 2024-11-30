import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import configPrettier from "eslint-config-prettier";

/**  @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    ignores: ["node_modules", "dist", "public", ".nuxt"],
  },

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-var": "warn",
      semi: "warn",
      indent: "warn",
      "no-multi-spaces": "warn",
      "space-in-parens": "warn",
      "no-multiple-empty-lines": "warn",
      "prefer-const": "warn",
      "no-use-before-define": "warn",
      "no-debugger": "warn",
    },
  },
  configPrettier,
];
