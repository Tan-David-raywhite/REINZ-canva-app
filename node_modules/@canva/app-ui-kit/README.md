# @canva/app-ui-kit

React-based component library for creating Canva Apps that mimic the look and feel of Canva.

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Table of contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components and Icons](#components-and-icons)
- [Design tokens](#design-tokens)
  - [CSS variables](#css-variables)
  - [JavaScript variables](#javascript-variables)
  - [List of design tokens](#list-of-design-tokens)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The App UI Kit is a React-based component library for designing and developing [Canva Apps](https://www.canva.com/your-apps/) that mimic the look and feel of [Canva](https://www.canva.com/).

<table>
  <tr>
    <td>To learn more about developing apps on Canva, see:</td>
    <td>
    <a href="https://www.canva.dev/docs/apps">
    <img alt="Canva dev" src="https://img.shields.io/badge/Canva%20Dev-00C4CC?style=for-the-badge&logo=Canva&logoColor=fff">
    </a>
    </td>
  </tr>
  <tr>
    <td>To browse all components in the App UI Kit, see:</td>
    <td>
    <a href="https://www.canva.dev/docs/apps/app-ui-kit/storybook/">
      <img alt="Canva dev" src="https://img.shields.io/badge/Storybook-FE4785?style=for-the-badge&logo=storybook&logoColor=fff">
    </a>
    </td>
  </tr>
</table>

**Note:** If you're planning on releasing a Canva App to the public, **we strongly recommend using the App UI Kit**, as we expect apps to meet certain design standards and it's difficult to do so without the components.

## Features

- Based on the components used by Canva's own engineers.
- Built for accessibility, usability, and cross-platform compatibility.
- Includes design tokens for creating custom components.

## Installation

```bash
npm install @canva/app-ui-kit
```

## Usage

**Note:** If you're using [the starter kit](https://github.com/canva-sdks/canva-apps-sdk-starter-kit), these steps have already been done for you.

At the root of the application, such as in the `index.tsx` file:

1. Import the stylesheet:

   ```tsx
   import '@canva/app-ui-kit/styles.css';
   ```

2. Import the `AppUiProvider` component:

   ```tsx
   import { AppUiProvider } from '@canva/app-ui-kit';
   ```

3. Wrap the app in the `AppUiProvider` component:

   ```tsx
   <AppUiProvider>
     <App />
   </AppUiProvider>
   ```

   This component should only be used once in an app's component tree.

After completing these steps, import and use components from the `@canva/app-ui-kit` package:

```tsx
import { Button, Rows, Text, Title } from '@canva/app-ui-kit';
import React from 'react';

export function App() {
  return (
    <Rows spacing="2u">
      <Rows spacing="1u">
        <Title>Hello world</Title>
        <Text>This is a paragraph of text.</Text>
      </Rows>
      <Button variant="primary">Click me</Button>
    </Rows>
  );
}
```

The components must exist as descendants of the `AppUiProvider` component.

## Components and Icons

The App UI Kit exports a number of **Components** (e.g. `Button`, `Text`, `Rows`, etc. ) and **Icons** (e.g. `PlusIcon`, `SearchIcon`, etc.) to use in your apps.

For the complete list and documentation on all components and icons see our Storybook instance:

[![](https://img.shields.io/badge/Storybook-FE4785?style=for-the-badge&logo=storybook&logoColor=fff)](https://www.canva.dev/docs/apps/app-ui-kit/storybook/)

## Design tokens

A design token is a variable used to store design-related values such as colors. They act as a single source of truth for design properties, making it easier to keep UIs consistent and maintainable.

The App UI Kit exposes design tokens as JavaScript and CSS variables. Apps can use these tokens to create or customize components that match the look and feel of Canva. If Canva changes the token's values, those changes are automatically reflected in the app.

### CSS variables

You can use the CSS variables in global stylesheets, CSS modules, or the app's source code:

```css
.button {
  background-color: var(--ui-kit-color-primary);
}
```

The variables are written in kebab case and are prefixed with `--ui-kit-`.

### JavaScript variables

You can use the JavaScript variables in the app's source code:

```tsx
import { tokens } from '@canva/app-ui-kit';

function App() {
  return <div style={{ backgroundColor: tokens.colorPrimary }}>Hello world.</div>;
}
```

The variables are written in camel case, without a prefix.

### List of design tokens

You can find the reference documentation for design tokens on the Canva Developers documentation site:

- [Colors](https://www.canva.dev/docs/apps/app-ui-kit/colors/)
- [Shadows](https://www.canva.dev/docs/apps/app-ui-kit/shadows/)
- [Spacing](https://www.canva.dev/docs/apps/app-ui-kit/spacing/)
- [Transitions](https://www.canva.dev/docs/apps/app-ui-kit/transitions/)
- [Units](https://www.canva.dev/docs/apps/app-ui-kit/units/)

## Changelog

See the `CHANGELOG.md` file or view it on our [documentation site](https://www.canva.dev/docs/apps/app-ui-kit/changelog/).

## Contributing

We're actively developing this package but are not currently accepting third-party contributions. If you'd like to request any changes or additions to the package, submit a feature request via the [Canva Developers Community](https://community.canva.dev/).

## License

See the `LICENSE.md` file.
