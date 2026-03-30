"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _mobx = require("mobx");
require("./i18n/translations");
(0, _mobx.configure)({
    enforceActions: 'observed',
    isolateGlobalState: true
});
