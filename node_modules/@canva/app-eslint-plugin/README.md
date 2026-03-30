# @canva/app-eslint-plugin

ESLint plugin for working with Canva.

![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)

## Table of contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Shareable Configuration](#shareable-configuration)
- [Rules](#rules)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The `@canva/app-eslint-plugin` package is an ESLint plugin that supplies configuration defaults and rules for working with Canva.

## Setup

If you're using the [Canva Apps SDK starter kit](https://github.com/canva-sdks/canva-apps-sdk-starter-kit), or you've used the [Canva CLI](https://www.npmjs.com/package/@canva/cli) to create a Canva SDK app, the `@canva/app-eslint-plugin` package should already be installed and configured for you.

### 1. Install

You can migrate an existing Canva SDK app, or use the `@canva/app-eslint-plugin` package in an app not based on the starter kit or generated from the Canva CLI. First install the package as a development dependency:

```bash
npm install @canva/app-eslint-plugin --save-dev
```

### 2. Configure

You can use the ESLint plugin by importing the `@canva/app-eslint-plugin` package into your ESlint config, and applying the provided shareable config. To import the package to your ESlint [flat config](https://eslint.org/docs/latest/use/configure/migration-guide):

```js
// eslint.config.js
import canva from "@canva/app-eslint-plugin";

export default [
  ...canva.configs.apps,
  // your existing eslint config
];
```

## Shareable Configuration

This package provides the following configuration sets:

- `apps` - For creating and maintaining high-quality [Canva Apps SDK](https://www.canva.dev/docs/apps/) apps.
- `apps_no_i18n` - This is the same as the `apps` configuration but without the requirement to translate the app. Most apps should support internationalization, however due to constraints on the number of messages some apps may not be able to be translated at this time.
- `apps_i18n` - This is just the parts of the `apps` config that _aren't_ included in the `apps_no_i18n` configuration. Generally it's better to use the `apps` config directly.

These sets include the following configuration sets provided by other packages:

- [ESLint recommended](https://eslint.org/docs/latest/use/configure/configuration-files#using-predefined-configurations).
- [typescript-eslint recommended, stylistic, and strict](https://typescript-eslint.io/users/configs).
- [eslint-plugin-react recommended](https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#recommended).
- [eslint-plugin-jest recommended](https://github.com/jest-community/eslint-plugin-jest?tab=readme-ov-file#shareable-configurations).

Additionally, the following rules are configured:

- 💼 Configuration sets the rule is enabled in:
  - 📦 `apps` and `apps_no_i18n`
  - 🌐 `apps` and `apps_i18n`

| Plugin                           | Rule                          | 💼  |
| -------------------------------- | ----------------------------- | --- |
| @typescript-eslint/eslint-plugin | no-non-null-assertion         | 📦  |
| @typescript-eslint/eslint-plugin | no-empty-function             | 📦  |
| @typescript-eslint/eslint-plugin | consistent-type-imports       | 📦  |
| @typescript-eslint/eslint-plugin | no-explicit-any               | 📦  |
| @typescript-eslint/eslint-plugin | no-empty-interface            | 📦  |
| @typescript-eslint/eslint-plugin | consistent-type-definitions   | 📦  |
| @typescript-eslint/eslint-plugin | explicit-member-accessibility | 📦  |
| @typescript-eslint/eslint-plugin | naming-convention             | 📦  |
| eslint                           | no-invalid-this               | 📦  |
| @typescript-eslint/eslint-plugin | no-invalid-this               | 📦  |
| @typescript-eslint/eslint-plugin | no-unused-expressions         | 📦  |
| eslint                           | no-unused-vars                | 📦  |
| @typescript-eslint/eslint-plugin | no-unused-vars                | 📦  |
| @typescript-eslint/eslint-plugin | no-require-imports            | 📦  |
| eslint-plugin-jest               | no-restricted-matchers        | 📦  |
| react                            | jsx-curly-brace-presence      | 📦  |
| react                            | jsx-tag-spacing               | 📦  |
| react                            | self-closing-comp             | 📦  |
| react                            | no-unescaped-entities         | 📦  |
| react                            | jsx-uses-react                | 📦  |
| react                            | react-in-jsx-scope            | 📦  |
| eslint                           | default-case                  | 📦  |
| eslint                           | eqeqeq                        | 📦  |
| eslint                           | no-caller                     | 📦  |
| eslint                           | no-console                    | 📦  |
| eslint                           | no-eval                       | 📦  |
| eslint                           | no-inner-declarations         | 📦  |
| eslint                           | no-new-wrappers               | 📦  |
| eslint                           | no-restricted-globals         | 📦  |
| eslint                           | no-restricted-properties      | 📦  |
| eslint                           | no-restricted-syntax          | 📦  |
| eslint                           | no-restricted-imports         | 📦  |
| eslint                           | no-return-await               | 📦  |
| eslint                           | no-throw-literal              | 📦  |
| eslint                           | no-undef-init                 | 📦  |
| eslint                           | no-var                        | 📦  |
| eslint                           | object-shorthand              | 📦  |
| eslint                           | prefer-const                  | 📦  |
| eslint                           | prefer-object-spread          | 📦  |
| eslint                           | prefer-rest-params            | 📦  |
| eslint                           | prefer-spread                 | 📦  |
| eslint                           | radix                         | 📦  |
| react                            | no-deprecated                 | 📦  |
| react                            | forbid-elements               | 📦  |
| eslint-plugin-formatjs           | no-invalid-icu                | 🌐  |
| eslint-plugin-formatjs           | no-literal-string-in-jsx      | 🌐  |
| eslint-plugin-formatjs           | enforce-description           | 🌐  |
| eslint-plugin-formatjs           | enforce-default-message       | 🌐  |
| eslint-plugin-formatjs           | enforce-placeholders          | 🌐  |
| eslint-plugin-formatjs           | no-id                         | 🌐  |
| eslint-plugin-formatjs           | no-emoji                      | 🌐  |
| eslint-plugin-formatjs           | no-useless-message            | 🌐  |
| eslint-plugin-formatjs           | no-multiple-plurals           | 🌐  |
| eslint-plugin-formatjs           | no-offset                     | 🌐  |
| eslint-plugin-formatjs           | blocklist-elements            | 🌐  |
| eslint-plugin-formatjs           | no-complex-selectors          | 🌐  |
| eslint-plugin-formatjs           | no-literal-string-in-object   | 🌐  |

## Changelog

See the `CHANGELOG.md` file.

## Contributing

We're actively developing this package but are not currently accepting third-party contributions. If you'd like to request any changes or additions to the package, submit a feature request via the [Canva Developers Community](https://community.canva.dev/).

## License

See the `LICENSE.md` file.
