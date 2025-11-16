// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        // browser globals
        ...globals.browser,

        // test globals (Vitest)
        describe: true, // group tests
        test: true,
        it: true,
        expect: true,

        // node-style globals used in config files, etc.
        require: true,
        module: true,
        process: true,
      },
    },
  },
  pluginJs.configs.recommended,
];
