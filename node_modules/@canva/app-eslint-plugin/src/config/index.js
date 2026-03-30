import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import reactPlugin from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import { default as apps_base } from "./apps.js";
import i18n from "./i18n.js";
export const apps_no_i18n = [
    {
        files: [
            "**/*.jsx",
            "**/*.tsx",
            "**/*.ts",
            "**/*.js",
            "**/*.mjs",
            "**/*.cjs",
        ],
        ignores: [
            "**/node_modules/",
            "**/dist",
            "**/*.d.ts",
            "**/*.d.tsx",
            "**/*.config.*",
        ],
        plugins: {
            js,
            react: reactPlugin,
            jest,
        },
    },
    js.configs.recommended,
    tseslint.configs.eslintRecommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    reactPlugin.configs.flat["recommended"] ?? {},
    jest.configs["flat/recommended"] ?? {},
    ...apps_base,
];
export const apps = [...apps_no_i18n, i18n];
export { i18n };
