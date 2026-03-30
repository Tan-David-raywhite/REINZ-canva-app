import * as React from "react";
import { RawIntlProvider } from "react-intl";
import { useTestIntl } from "../utils/use_app_intl";
import { validateUserDefinedConfig } from "../utils/validation";
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
export const TestAppI18nProvider = ({ children, ...config }) => {
    var _a;
    if (process.env["NODE_ENV"] === "development") {
        validateUserDefinedConfig(config);
    }
    // check which environment we're in
    const wrappedWindow = window;
    const canvaUiKit = (_a = wrappedWindow === null || wrappedWindow === void 0 ? void 0 : wrappedWindow.__canva__) === null || _a === void 0 ? void 0 : _a.uiKit;
    // the UI Kit will be undefined in test environments, but defined in the app sandbox
    // this check is here to prevent it from being used in a real app runtime
    if (canvaUiKit != null) {
        throw new Error(`'TestAppI18nProvider' detected in a non-test environment. Replace 'TestAppI18nProvider' usage with 'AppI18nProvider' in your app.`);
    }
    const intl = useTestIntl({ config });
    if (!intl) {
        return React.createElement(React.Fragment, null);
    }
    return React.createElement(RawIntlProvider, { value: intl }, children);
};
