# @canva/intents

A package for Canva's Apps SDK that provides types and utilities for working with App Intents.

![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Table of contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Related packages](#related-packages)
- [Contributing](#contributing)
- [License](#license)

## Introduction

`@canva/intents` is an npm package for Canva's [Apps SDK](https://www.canva.dev/docs/apps).
It provides intent-specific types and helpers that allow apps to integrate with specific surfaces within the Canva editor — such as the data connector panel or the design editor.

An "intent" represents a specific user workflow an app can support. For example:

- Users can select and import data from an app which implements the **Data Connector** intent.
- An app is able to present interactive and creative tooling alongside the Canva design surface by implementing the **Design Editor** intent.
- Users can publish their Canva designs directly to external platforms.

The `@canva/intents` package encompasses **all available intents**, exporting each intent's type information and prepare function, grouped by domain.
This allows your app to prepare one or more intents while keeping each intent's implementation modular and type-safe.

Currently supported intents:

- [`Data Connector`](#data-connector-example)
- [`Design Editor`](#design-editor-example)
- [`Content Publisher`](#content-publisher-example)

New intents will be added to this package in the future.

**Note:** To get up and running with the Apps SDK, check out [the quick start guide](https://www.canva.dev/docs/apps/quick-start).

## Installation

```bash
npm install @canva/intents
```

## Usage

### Preparing an intent

Each intent type has a corresponding `prepare` function in the `@canva/intents` package. You can implement any intent in your app code by calling the appropriate `prepare` function with the particular parameters it requires.

### Data Connector example

Here’s a full example of preparing a `data_connector` intent, which allows users to import tabular data from an app:

```ts
import { createRoot } from 'react-dom/client';
import { AppUiProvider } from '@canva/app-ui-kit';
import { prepareDataConnector } from '@canva/intents/data';
import { DataSelectionUI } from './data_selection_ui';
import { fetchData } from './fetch_data';

prepareDataConnector({
  getDataTable: async (request) => {
    try {
      const dataTable = await fetchData(request); // your data fetching logic here
      return {
        status: 'completed',
        dataTable,
      };
    } catch {
      return {
        status: 'app_error',
        message: 'Failed to fetch data',
      };
    }
  },

  renderSelectionUi: (request) => {
    const root = createRoot(document.getElementById('root') as Element);
    root.render(
      <AppUiProvider>
        <DataSelectionUI {...request} />
      </AppUiProvider>
    );
  },
});
```

### Design Editor example

```ts
import { prepareDesignEditor } from '@canva/intents/design';

prepareDesignEditor({
  render() {
    // render logic
  },
});
```

### Content Publisher example

```ts
import { prepareContentPublisher } from "@canva/intents/content";

prepareContentPublisher({
  renderSettingsUi: ({
    updatePublishSettings,
    registerOnContextChange,
  }) => {
    root.render(
      <AppUiProvider>
        <SettingUi
          updatePublishSettings={updatePublishSettings}
          registerOnContextChange={registerOnContextChange}
        />
      </AppUiProvider>,
    );
  },

  renderPreviewUi: ({ registerOnPreviewChange }) => {
    root.render(
      <AppUiProvider>
        <PreviewUi registerOnPreviewChange={registerOnPreviewChange} />
      </AppUiProvider>,
    );
  },

  getPublishConfiguration: async () => {
    return {
      status: "completed",
      outputTypes: [
        {
          id: "post",
          displayName: "Post",
          mediaSlots: [
            {
              id: "media",
              displayName: "Media",
              fileCount: { exact: 1 },
              accepts: {
                image: {
                  format: "png",
                },
              },
            },
          ],
        },
      ],
    };
  },

  publishContent: async (request: PublishContentRequest) => {
    // logic to upload media to your platform here
    return {
      status: "completed",
      externalId: "1234567890",
      externalUrl: "https://example.com/posts/1234567890",
    };
  },
});
```

## Related packages

The Apps SDK is made up of the following packages:

- [`@canva/app-ui-kit`](https://www.npmjs.com/package/@canva/app-ui-kit) - React-based component library for creating apps that mimic the look and feel of Canva.
- [`@canva/asset`](https://www.npmjs.com/package/@canva/asset) - Provides methods for working with assets, such as image and video files.
- [`@canva/design`](https://www.npmjs.com/package/@canva/design) - Provides methods for interacting with the user's design, such as creating elements.
- [`@canva/error`](https://www.npmjs.com/package/@canva/error) - Provides a `CanvaError` class for handling errors.
- [`@canva/platform`](https://www.npmjs.com/package/@canva/platform) - Provides utility methods, such as a method for opening external links.
- [`@canva/user`](https://www.npmjs.com/package/@canva/user) - Provides methods for accessing user data and authenticating users.

## Contributing

We're actively developing this package but are not currently accepting third-party contributions. If you'd like to request any changes or additions to the package, submit a feature request via the [Canva Developers Community](https://community.canva.dev/).

## License

See the `LICENSE.md` file.
