# Changelog

## 1.2.0 - 2025-12-09

### Added

- Added `initIntl()` function to allow extracting and localizing strings outside of React components.

## 1.1.1 - 2025-10-01

### Fixed

- Broadened the peer dependency range for React for compatibility

## 1.1.0 - 2025-09-30

### Changed

- Upgraded React to v19, changing peer dependencies for intl-messageformat, react, react-dom and react-intl

## 1.0.3 - 2025-06-18

### Fixed

- Downgraded target output from `ES2022` to `ES2019` to support older browsers.
  - `ES2022` is not supported by some of the browsers mentioned in the current [Canva supported browsers](https://www.canva.com/help/technical-requirements/#desktop-and-mobile-browser--canva.com-).

## 1.0.2 - 2024-12-10

### Fixed

- Fixed an issue with how `TestAppI18nProvider` checked for a test environment.

## 1.0.1 - 2024-11-14

### Changed

- Loosen `peerDependencies` requirements to allow dependency upgrades:
  - Changed `react-intl` version from `6.6.8` to `6.6.8 || ~6.8.7`.
  - Changed `intl-messageformat` version from `10.5.14` to `10.5.14 || ~10.7.6`.

## 1.0.0 - 2024-10-01

### Added

- Initial package release
