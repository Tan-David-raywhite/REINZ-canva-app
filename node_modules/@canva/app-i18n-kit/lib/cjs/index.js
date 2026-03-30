"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.initIntl = exports.TestAppI18nProvider = exports.AppI18nProvider = void 0;
var app_i18n_provider_1 = require("./components/app_i18n_provider");
Object.defineProperty(exports, "AppI18nProvider", { enumerable: true, get: function () { return app_i18n_provider_1.AppI18nProvider; } });
var test_app_i18n_provider_1 = require("./components/test_app_i18n_provider");
Object.defineProperty(exports, "TestAppI18nProvider", { enumerable: true, get: function () { return test_app_i18n_provider_1.TestAppI18nProvider; } });
var intl_1 = require("./utils/intl");
Object.defineProperty(exports, "initIntl", { enumerable: true, get: function () { return intl_1.initIntl; } });
// prettier-ignore
// @formatter:off
(_b = (_a = window.__canva__) === null || _a === void 0 ? void 0 : _a.sdkRegistration) === null || _b === void 0 ? void 0 : _b.registerPackageVersion('app-i18n-kit', '1.2.0', 'ga');
