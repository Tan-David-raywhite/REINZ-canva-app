"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get CheckboxLabelText () {
        return _label.CheckboxLabelText;
    },
    get Label () {
        return _label.Label;
    },
    get LabelMediumText () {
        return _label.LabelMediumText;
    },
    get LabelText () {
        return _label.LabelText;
    },
    get RadioLabelText () {
        return _label.RadioLabelText;
    }
});
const _label = require("./private/label");
