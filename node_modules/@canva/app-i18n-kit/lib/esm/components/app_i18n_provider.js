import * as React from "react";
import { RawIntlProvider } from "react-intl";
import { useAppIntl } from "../utils/use_app_intl";
import { validateUserDefinedConfig } from "../utils/validation";
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
export const AppI18nProvider = ({ children, ...config }) => {
    if (process.env["NODE_ENV"] === "development") {
        validateUserDefinedConfig(config);
    }
    const i18n = window.canva_sdk.platform.v2
        .i18n;
    const locale = document.documentElement.lang;
    const intl = useAppIntl({ i18n, locale, config });
    if (!intl) {
        return React.createElement(React.Fragment, null);
    }
    return React.createElement(RawIntlProvider, { value: intl }, children);
};
