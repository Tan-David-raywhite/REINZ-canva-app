import jest from "eslint-plugin-jest";
import react from "eslint-plugin-react";
import globals from "globals";
import { plugin } from "typescript-eslint";
const config = [
    {
        plugins: {
            "@typescript-eslint": plugin,
            jest,
            react,
        },
        languageOptions: {
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "@typescript-eslint/no-non-null-assertion": "warn",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-empty-interface": "warn",
            "@typescript-eslint/consistent-type-definitions": "off",
            "@typescript-eslint/explicit-member-accessibility": [
                "error",
                {
                    accessibility: "no-public",
                    overrides: {
                        parameterProperties: "off",
                    },
                },
            ],
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "typeLike",
                    format: ["PascalCase"],
                    leadingUnderscore: "allow",
                },
            ],
            "no-invalid-this": "off",
            "@typescript-eslint/no-invalid-this": "error",
            "@typescript-eslint/no-unused-expressions": [
                "error",
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                },
            ],
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "none",
                    ignoreRestSiblings: true,
                },
            ],
            "@typescript-eslint/no-require-imports": "error",
            "jest/no-restricted-matchers": [
                "error",
                {
                    toContainElement: "Avoid using toContainElement, as it encourages testing the internal implementation of components.",
                    toContainHTML: "Avoid using toContainHTML, as it encourages testing the internal implementation of components.",
                    toHaveAttribute: "Avoid using toHaveAttribute, as it encourages testing the internal implementation of components.",
                    toHaveClass: "Avoid using toHaveClass, as it encourages testing the internal implementation of components.",
                    toHaveStyle: "Avoid using toHaveStyle, as it encourages testing the internal implementation of components.",
                },
            ],
            "react/jsx-curly-brace-presence": [
                "error",
                {
                    props: "never",
                    children: "never",
                },
            ],
            "react/jsx-tag-spacing": [
                "error",
                {
                    closingSlash: "never",
                    beforeSelfClosing: "allow",
                    afterOpening: "never",
                    beforeClosing: "allow",
                },
            ],
            "react/self-closing-comp": "error",
            "react/no-unescaped-entities": "off",
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            "default-case": "error",
            eqeqeq: [
                "error",
                "always",
                {
                    null: "never",
                },
            ],
            "no-caller": "error",
            "no-console": "error",
            "no-eval": "error",
            "no-inner-declarations": "error",
            "no-new-wrappers": "error",
            "no-restricted-globals": [
                "error",
                {
                    name: "fit",
                    message: "Avoid focusing tests",
                },
                {
                    name: "fdescribe",
                    message: "Avoid focusing tests",
                },
                {
                    name: "length",
                    message: "Length is undefined. Did you mean to use window.length instead?",
                },
                {
                    name: "name",
                    message: "Name is undefined. Did you mean to use window.name instead?",
                },
                {
                    name: "status",
                    message: "Status is undefined. Did you mean to use window.status instead?",
                },
                {
                    name: "spyOn",
                    message: "Avoid using spyOn directly. Use jest.spyOn instead",
                },
            ],
            "no-restricted-properties": [
                "error",
                {
                    property: "bind",
                    message: "Avoid using bind. Use () => o.f(...) instead",
                },
                {
                    object: "ReactDOM",
                    property: "findDOMNode",
                    message: "ReactDOM.findDOMNode() is deprecated. Avoid using it.",
                },
            ],
            "no-restricted-syntax": [
                "error",
                {
                    selector: "AccessorProperty, TSAbstractAccessorProperty",
                    message: "Accessor property syntax isn't allowed. Use getters and setters instead.",
                },
                {
                    selector: "PrivateIdentifier",
                    message: "Private identifiers aren't allowed. Use TypeScript private fields instead.",
                },
                {
                    selector: "JSXOpeningElement[name.name = /^[A-Z]/] > JSXAttribute[name.name = /-/]",
                    message: "Passing hyphenated props to custom components isn't type-safe. Use a camelCased equivalent if available. Learn more: https://github.com/microsoft/TypeScript/issues/55182",
                },
                {
                    selector: "CallExpression[callee.object.name='window'][callee.property.name='open']",
                    message: "Apps can't open pop-ups or new tabs using browser APIs. Use requestOpenExternalUrl from @canva/platform to link to external URLs. Learn more: https://www.canva.dev/docs/apps/api/platform-request-open-external-url/",
                },
            ],
            "no-restricted-imports": [
                "warn",
                {
                    patterns: [
                        {
                            group: ["*.png", "*.jpg", "*.jpeg", "*.gif"],
                            message: "Inline images increase bundle size and can impact app performance. Use a CDN or external hosting service to load assets dynamically whenever possible.",
                        },
                        {
                            group: ["*.mp4", "*.webm", "*.ogg"],
                            message: "Inline videos increase bundle size and can impact app performance. Use a CDN or external hosting service to load assets dynamically whenever possible.",
                        },
                        {
                            group: ["*.mp3", "*.wav", "*.ogg"],
                            message: "Inline audio files increase bundle size and can impact app performance. Use a CDN or external hosting service to load assets dynamically whenever possible.",
                        },
                    ],
                },
            ],
            "no-return-await": "error",
            "no-throw-literal": "error",
            "no-undef-init": "error",
            "no-var": "error",
            "object-shorthand": "error",
            "prefer-const": [
                "error",
                {
                    destructuring: "all",
                },
            ],
            "prefer-object-spread": "error",
            "prefer-rest-params": "error",
            "prefer-spread": "error",
            radix: "error",
        },
    },
    {
        files: ["**/*.tsx", "**/*.jsx"],
        rules: {
            "react/no-deprecated": "error",
            "react/forbid-elements": [
                "error",
                {
                    forbid: [
                        {
                            element: "video",
                            message: "Avoid using HTML video directly. Use the App UI Kit <VideoCard /> instead, as it respects users' autoplay preferences.",
                        },
                        {
                            element: "em",
                            message: "Avoid using <em> to italicize text. Canva's UI fonts don't support italic font style.",
                        },
                        {
                            element: "i",
                            message: "Avoid using <i> to italicize text. Canva's UI fonts don't support italic font style.",
                        },
                        {
                            element: "iframe",
                            message: "Canva Apps can't contain iframes. Recreate the UI within the app or link to your page using a <Link> tag. Learn more: https://www.canva.dev/docs/apps/content-security-policy/#what-is-and-isnt-allowed",
                        },
                        {
                            element: "script",
                            message: "Script tags aren't allowed in Canva SDK Apps. Use JavaScript modules instead. Learn more: https://www.canva.dev/docs/apps/content-security-policy/#what-is-and-isnt-allowed",
                        },
                        {
                            element: "a",
                            message: "Avoid using <a> tags. Use the <Link> component from the App UI Kit instead, and open the url with requestOpenExternalUrl from @canva/platform.",
                        },
                        {
                            element: "img",
                            message: "Try using <ImageCard /> from the App UI Kit instead.",
                        },
                        {
                            element: "embed",
                            message: "Try using <EmbedCard /> from the App UI Kit instead.",
                        },
                        {
                            element: "audio",
                            message: "Try using <AudioCard /> from the App UI Kit instead.",
                        },
                        {
                            element: "button",
                            message: "Use the <Button> component from the App UI Kit instead of the native HTML <button> for consistency and accessibility.",
                        },
                        {
                            element: "input",
                            message: "Use form inputs from the App UI Kit whenever possible for consistency and accessibility (e.g., <TextInput>, <Checkbox>, <FileInput>).",
                        },
                        {
                            element: "base",
                            message: "The <base> tag isn't supported in Canva Apps. Use hash-based routing instead. Learn more: https://www.canva.dev/docs/apps/content-security-policy/#what-is-and-isnt-allowed",
                        },
                        {
                            element: "link",
                            message: "To include a CSS stylesheet, import it using React or use embedded stylesheets. Learn more: https://www.canva.dev/docs/apps/content-security-policy/#what-is-and-isnt-allowed",
                        },
                    ],
                },
            ],
        },
    },
];
export default config;
