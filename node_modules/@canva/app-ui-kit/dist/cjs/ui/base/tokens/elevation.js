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
    get elevationActionRaised () {
        return elevationActionRaised;
    },
    get elevationActionResting () {
        return elevationActionResting;
    },
    get elevationSurfaceBg () {
        return elevationSurfaceBg;
    },
    get elevationSurfaceFloatingBg () {
        return elevationSurfaceFloatingBg;
    },
    get elevationSurfaceFloatingShadow () {
        return elevationSurfaceFloatingShadow;
    },
    get elevationSurfaceRaisedBg () {
        return elevationSurfaceRaisedBg;
    },
    get elevationSurfaceRaisedShadow () {
        return elevationSurfaceRaisedShadow;
    },
    get elevationSurfaceRestingShadow () {
        return elevationSurfaceRestingShadow;
    },
    get elevationSurfaceSunkenBg () {
        return elevationSurfaceSunkenBg;
    }
});
const _elevationcss = _interop_require_default(require("./private/elevation.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const elevationSurfaceSunkenBg = _elevationcss.default.elevationSurfaceSunkenBg;
const elevationSurfaceBg = _elevationcss.default.elevationSurfaceBg;
const elevationSurfaceRaisedBg = _elevationcss.default.elevationSurfaceRaisedBg;
const elevationSurfaceFloatingBg = _elevationcss.default.elevationSurfaceFloatingBg;
const elevationSurfaceRestingShadow = _elevationcss.default.elevationSurfaceRestingShadow;
const elevationSurfaceRaisedShadow = _elevationcss.default.elevationSurfaceRaisedShadow;
const elevationSurfaceFloatingShadow = _elevationcss.default.elevationSurfaceFloatingShadow;
const elevationActionRaised = _elevationcss.default.elevationActionRaised;
const elevationActionResting = _elevationcss.default.elevationActionResting;
