# CHANGELOG

## 2.6.0 - 2026-06-09

### Added

- Promote `DocumentPreviewUpgrading`, `DocumentPreviewReady`, and `DocumentPreviewPage` from beta to public
- The `DocumentPreview` union now includes `upgrading` and `ready` states in the GA package

## 2.5.0 - 2026-04-09

### Changed

- Increased the `publishRef` size limit from 5KB to 32KB, allowing apps to store more complex publishing settings.

### Added

- Add design metadata in MediaSelections
- Enable apps to support transparent PNG exports in publish flow by adding optional allowTransparentBackground capability to ImageRequirement

## 2.4.0 - 2026-03-23

### Added

- Launch the new Email media type to public, enabling publishing and selection of email pages.

## 2.3.1 - 2026-03-12

### Fixed

- Re-export data types from the intents/data public API that were accidentally removed during a refactor
- Rename `Selection` type to `MediaSelection` for clarity

## 2.3.0 - 2026-03-06

### Added

- Promoted `Selection`, `ImageSelection`, `VideoSelection`, `DocumentSelection`, `EmailSelection` types and `MediaSlot.selection` field from beta to public

## 2.2.0 - 2026-02-06

### Added

- Added invocation context to provide initial state when rendering UIs

## 2.1.2 - 2026-02-03

### Fixed

- Fix missing id and status fields in Content Publisher email preview type

## 2.1.1 - 2026-01-30

### Changed

- Update NPM readme

## 2.1.0 - 2026-01-30

### Added

- Added a CHANGELOG.md to track changes.
- Added a test harness method `initTestEnvionment` which can be imported from `@canva/intents/test`
- Promoted the Content Publisher Intent API from beta to general availability

## 2.0.0 - 2025-06-12

### Added

- Added the new `@canva/intents` package at version `2.0.0` with the brand new [Data Connector](https://www.canva.dev/docs/apps/data-connector/) intent.
