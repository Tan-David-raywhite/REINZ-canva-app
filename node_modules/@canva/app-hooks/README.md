# @canva/app-hooks

React hooks for building with Canva's Apps SDK.

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Table of contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Hooks](#hooks)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The `@canva/app-hooks` package provides React hooks for building with Canva's Apps SDK. These hooks simplify common interactions with the Canva platform, including adding elements to designs, detecting feature support, managing overlays, and handling user selections.

## Installation

```bash
npm install @canva/app-hooks
```

### Using with prerelease versions of dependencies

If you need to use prerelease versions of required dependencies, use `npm install --legacy-peer-deps` to install the package.

## Usage

If you're using the [Canva Apps SDK starter kit](https://github.com/canva-sdks/canva-apps-sdk-starter-kit), you can start using the hooks right away by importing them into your React components.

```typescript
import {
  useFeatureSupport,
  useOverlay,
  useSelection,
  useTable,
} from "@canva/app-hooks";
```

## Hooks

### useFeatureSupport

Hook that allows React components to re-render when the state of feature support changes in Canva.

For more information, see [Feature support](https://www.canva.dev/docs/apps/feature-support).

### useOverlay

Hook for managing overlay interactions on specified targets.

For more information, see [Creating image overlays](https://www.canva.dev/docs/apps/creating-image-overlays).

### useSelection

Hook for listening to user selection changes on specified content types.

For more information, see [Selection API](https://www.canva.dev/docs/apps/selection).

### useTable

Hook that simplifies the creation of a table and the management of a table's state.

For more information, see [Creating tables](https://www.canva.dev/docs/apps/creating-tables).

## Changelog

See the `CHANGELOG.md` file.

## Contributing

We're actively developing this package but are not currently accepting third-party contributions. If you'd like to request any changes or additions to the package, submit a feature request via the [Canva Developers Community](https://community.canva.dev/).

## License

See the `LICENSE.md` file.
