"use strict";
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
    get SurfaceHeader () {
        return _header.SurfaceHeader;
    },
    get SurfaceHeaderBackButton () {
        return _header.SurfaceHeaderBackButton;
    },
    get SurfaceHeaderCloseButton () {
        return _header.SurfaceHeaderCloseButton;
    },
    get SurfaceHeaderContextProvider () {
        return _header.SurfaceHeaderContextProvider;
    },
    get SurfaceHeaderDescription () {
        return _header.SurfaceHeaderDescription;
    },
    get SurfaceHeaderIconButton () {
        return _header.SurfaceHeaderIconButton;
    },
    get SurfaceHeaderTextButton () {
        return _header.SurfaceHeaderTextButton;
    },
    get SurfaceHeaderTitle () {
        return _header.SurfaceHeaderTitle;
    }
});
const _header = require("./private/header");
