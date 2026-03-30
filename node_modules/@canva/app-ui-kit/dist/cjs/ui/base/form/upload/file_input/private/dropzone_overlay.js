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
    get DropzoneOverlay () {
        return DropzoneOverlay;
    },
    get DropzoneOverlayInternal () {
        return DropzoneOverlayInternal;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _icon = require('../../../../icons/cloud_upload/icon');
const _icon1 = require('../../../../icons/folder/icon');
const _icon2 = require('../../../../icons/image/icon');
const _icon3 = require('../../../../icons/music/icon');
const _icon4 = require('../../../../icons/print_document/icon');
const _icon5 = require('../../../../icons/video_landscape/icon');
const _layout = require('../../../../layout/layout');
const _typography = require('../../../../typography/typography');
const _dropzone_context = require("./dropzone_context");
const _dropzone_overlaycss = _interop_require_default(require("./dropzone_overlay.css"));
const _dropzone_overlaymessages = require("./dropzone_overlay.messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const DropzoneOverlayInternal = _react.memo((props)=>{
    const dropzoneContext = (0, _dropzone_context.useDropzoneContext)();
    const { variant = 'surface', isOver, icon: Icon = _icon.CloudUploadIcon, title, description, uploadType = 'singleFile', acceptCategories, disabled } = {
        ...dropzoneContext,
        ...props
    };
    const mainText = title ?? getMainText(uploadType);
    return (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(_dropzone_overlaycss.default.dropzoneOverlay, {
            [_dropzone_overlaycss.default.input]: variant === 'input',
            [_dropzone_overlaycss.default.surface]: variant === 'surface',
            [_dropzone_overlaycss.default.fileHovering]: isOver,
            [_dropzone_overlaycss.default.disabled]: disabled
        }),
        "aria-hidden": !isOver || disabled,
        children: (0, _jsxruntime.jsxs)(_layout.Rows, {
            spacing: "0",
            align: "center",
            children: [
                (0, _jsxruntime.jsx)(Icon, {
                    size: "large",
                    tone: "primary"
                }),
                (0, _jsxruntime.jsx)(_typography.Text, {
                    tone: "primary",
                    size: "large",
                    weight: "bold",
                    tagName: "span",
                    alignment: "center",
                    children: mainText
                }),
                description != null && (0, _jsxruntime.jsx)(_typography.Text, {
                    tone: "secondary",
                    size: "small",
                    tagName: "span",
                    alignment: "center",
                    children: description
                }),
                acceptCategories != null && (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                    children: [
                        (0, _jsxruntime.jsx)(_layout.Spacer, {
                            direction: "vertical",
                            size: "3u"
                        }),
                        (0, _jsxruntime.jsx)(CategoryList, {
                            acceptCategories: acceptCategories,
                            enableFolders: uploadType === 'filesAndFolders'
                        })
                    ]
                })
            ]
        })
    });
});
const getMainText = (uploadType)=>{
    switch(uploadType){
        case 'singleFile':
            return _dropzone_overlaymessages.DropzoneOverlayMessages.mainTextSingleFile();
        case 'multipleFiles':
            return _dropzone_overlaymessages.DropzoneOverlayMessages.mainText();
        case 'filesAndFolders':
            return _dropzone_overlaymessages.DropzoneOverlayMessages.mainTextFilesAndFolders();
        default:
            return _dropzone_overlaymessages.DropzoneOverlayMessages.mainTextSingleFile();
    }
};
const Category = ({ category, icon: Icon, description })=>{
    return (0, _jsxruntime.jsxs)(_layout.Rows, {
        spacing: "0",
        children: [
            (0, _jsxruntime.jsxs)(_layout.Inline, {
                align: "center",
                alignY: "center",
                spacing: "0.5u",
                children: [
                    Icon && (0, _jsxruntime.jsx)(Icon, {
                        size: "small",
                        tone: "secondary"
                    }),
                    (0, _jsxruntime.jsx)(_typography.Text, {
                        weight: "bold",
                        tone: "secondary",
                        children: category
                    })
                ]
            }),
            (0, _jsxruntime.jsx)(_typography.Text, {
                size: "small",
                tone: "secondary",
                alignment: "center",
                children: description
            })
        ]
    });
};
const CategoryList = ({ acceptCategories, enableFolders })=>{
    return (0, _jsxruntime.jsxs)(_layout.Rows, {
        spacing: "2u",
        children: [
            acceptCategories['file'] != null && (0, _jsxruntime.jsx)(Category, {
                category: _dropzone_overlaymessages.DropzoneOverlayMessages.files(),
                icon: _icon4.PrintDocumentIcon,
                description: getCategoryDescription(acceptCategories['file'])
            }),
            acceptCategories['image'] != null && (0, _jsxruntime.jsx)(Category, {
                category: _dropzone_overlaymessages.DropzoneOverlayMessages.images(),
                icon: _icon2.ImageIcon,
                description: getCategoryDescription(acceptCategories['image'])
            }),
            acceptCategories['video'] != null && (0, _jsxruntime.jsx)(Category, {
                category: _dropzone_overlaymessages.DropzoneOverlayMessages.videos(),
                icon: _icon5.VideoLandscapeIcon,
                description: getCategoryDescription(acceptCategories['video'])
            }),
            acceptCategories['audio'] != null && (0, _jsxruntime.jsx)(Category, {
                category: _dropzone_overlaymessages.DropzoneOverlayMessages.audio(),
                icon: _icon3.MusicIcon,
                description: getCategoryDescription(acceptCategories['audio'])
            }),
            enableFolders && (0, _jsxruntime.jsx)(Category, {
                category: _dropzone_overlaymessages.DropzoneOverlayMessages.folders(),
                icon: _icon1.FolderIcon,
                description: _dropzone_overlaymessages.DropzoneOverlayMessages.foldersDescription()
            })
        ]
    });
};
const getCategoryDescription = (fileTypes)=>{
    return fileTypes.map((s)=>s.toUpperCase()).join(_dropzone_overlaymessages.DropzoneOverlayMessages.separator());
};
const DropzoneOverlay = (props)=>{
    return (0, _jsxruntime.jsx)(DropzoneOverlayInternal, {
        ...props
    });
};
