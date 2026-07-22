"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addPage", {
    enumerable: true,
    get: function() {
        return addPage;
    }
});
const _version = require("./version");
_export_star(require("./public"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}
const addPage = canva_sdk.design.v2.designInteraction.addPage;
window.__canva__?.sdkRegistration?.registerPackageVersion('design', _version.LATEST_VERSION, 'ga');
