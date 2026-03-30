import * as React from "react";
import type { UserDefinedIntlConfig } from "../utils/types";
/**
 * Canva-specific replacement for `IntlProvider` of `react-intl`
 *
 * Once the app has been translated, this component handles detecting the user's locale
 * and loading the appropriate translated messages from the Canva platform.
 *
 * The locale and messages are passed to the app's `<Formatted*>` components and
 * `useIntl().format*()` usages.
 *
 * This component also provides pseudolocalization capabilities to allow testing if the app's UI is responsive
 * to text of different locales.
 *
 * @remarks
 * This component must appear once — and only once — at the root of an app, otherwise `react-intl` components will not work.
 * Your app must not use `IntlProvider` of `react-intl` when this component is used.
 */
export declare const AppI18nProvider: ({
  children,
  ...config
}: React.PropsWithChildren<UserDefinedIntlConfig>) => React.JSX.Element;
