"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppI18nProvider = void 0;
const React = require("react");
const react_intl_1 = require("react-intl");
const use_app_intl_1 = require("../utils/use_app_intl");
const validation_1 = require("../utils/validation");
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
const AppI18nProvider = ({ children, ...config }) => {
    if (process.env["NODE_ENV"] === "development") {
        (0, validation_1.validateUserDefinedConfig)(config);
    }
    const i18n = window.canva_sdk.platform.v2
        .i18n;
    const locale = document.documentElement.lang;
    const intl = (0, use_app_intl_1.useAppIntl)({ i18n, locale, config });
    if (!intl) {
        return React.createElement(React.Fragment, null);
    }
    return React.createElement(react_intl_1.RawIntlProvider, { value: intl }, children);
};
exports.AppI18nProvider = AppI18nProvider;
