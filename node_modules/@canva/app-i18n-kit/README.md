# @canva/app-i18n-kit

Internationalization kit for Canva apps. Adapts `react-intl` and `@formatjs/intl` to work with the Canva Apps SDK localization process

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Table of contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The `@canva/app-i18n-kit` package provides utilities required to localize Canva apps. It supports:

- **Within React components** - Using the `AppI18nProvider` component, `FormattedMessage` component and `useIntl` hook
- **Outside React components** - Using the `initIntl` function

### Within React components - Example usage

```tsx
import { AppI18nProvider } from "@canva/app-i18n-kit";
import { FormattedMessage, useIntl } from "react-intl";

// Wrap your app at the root
function App() {
  return (
    <AppI18nProvider>
      <MyComponent />
    </AppI18nProvider>
  );
}

// Use hooks or components within the provider
function MyComponent() {
  const intl = useIntl();
  const placeholder = intl.formatMessage({
    defaultMessage: "Search...",
    description:
      "Placeholder text shown in the search input field before the user types",
  });

  return (
    <Box>
      <FormattedMessage
        defaultMessage="Welcome to my app"
        description="Heading displayed at the top of the app when it first loads"
      />
      <TextInput placeholder={placeholder} />
    </Box>
  );
}
```

### Outside React components - Example usage

```tsx
import { initIntl } from "@canva/app-i18n-kit";

const intl = initIntl();
async function getPublishConfiguration() {
  return {
    status: "completed",
    outputTypes: [
      {
        id: "post",
        displayName: intl.formatMessage({
          defaultMessage: "Feed Post",
          description:
            "Label shown in the output type dropdown for publishing to social media feeds",
        }),
        // ...
      },
    ],
  };
}
```

To learn more about localizing Canva apps, see [the official documentation](https://www.canva.dev/docs/apps/localization/).

## Installation

### For React apps

```bash
npm install @canva/app-i18n-kit react-intl && npm install --save-dev @formatjs/cli
```

### For non-React apps

```bash
npm install @canva/app-i18n-kit @formatjs/intl && npm install --save-dev @formatjs/cli
```

## Usage

If you're using the [Canva Apps SDK starter kit](https://github.com/canva-sdks/canva-apps-sdk-starter-kit), the `@canva/app-i18n-kit` package is already configured.

To migrate an existing Canva app or to use `@canva/app-i18n-kit` in an app not based on the starter kit, follow the instructions in [Migrate an existing app](https://www.canva.dev/docs/apps/localization/migrate-an-existing-app/) in the Canva Apps SDK documentation.

## Changelog

See the `CHANGELOG.md` file.

## Contributing

We're actively developing this package but are not currently accepting third-party contributions. If you'd like to request any changes or additions to the package, submit a feature request via the [Canva Developers Community](https://community.canva.dev/).

## License

See the `LICENSE.md` file.
