import * as React from "react";
import type { UserDefinedIntlConfig } from "../utils/types";
/**
 * A wrapper that allows using I18n components in test environments
 *
 * The app's `<Formatted*>` components and `useIntl().format*()` usages will use their default messages.
 *
 * @remarks
 * This component must appear once — and only once — at the root of an app, as the other components depend on it.
 * Your app must not use `IntlProvider` of `react-intl` when this component is used.
 * This component must only be used in test environments. Use {@link AppI18nProvider} in production environments.
 */
export declare const TestAppI18nProvider: ({
  children,
  ...config
}: React.PropsWithChildren<UserDefinedIntlConfig>) => React.JSX.Element;
