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
    get getUploadCategory () {
        return getUploadCategory;
    },
    get getUploadIllustrations () {
        return getUploadIllustrations;
    }
});
const _audio_1xpng = _interop_require_default(require("./assets/upload_illustration/audio_1x.png"));
const _audio_2xpng = _interop_require_default(require("./assets/upload_illustration/audio_2x.png"));
const _file_1xpng = _interop_require_default(require("./assets/upload_illustration/file_1x.png"));
const _file_2xpng = _interop_require_default(require("./assets/upload_illustration/file_2x.png"));
const _image_1xpng = _interop_require_default(require("./assets/upload_illustration/image_1x.png"));
const _image_2xpng = _interop_require_default(require("./assets/upload_illustration/image_2x.png"));
const _multiple_1xpng = _interop_require_default(require("./assets/upload_illustration/multiple_1x.png"));
const _multiple_2xpng = _interop_require_default(require("./assets/upload_illustration/multiple_2x.png"));
const _video_1xpng = _interop_require_default(require("./assets/upload_illustration/video_1x.png"));
const _video_2xpng = _interop_require_default(require("./assets/upload_illustration/video_2x.png"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const mimeTypeCategoryMap = new Map([
    [
        'image/',
        'image'
    ],
    [
        'video/',
        'video'
    ],
    [
        'audio/',
        'audio'
    ],
    [
        'application/',
        'file'
    ],
    [
        'text/',
        'file'
    ]
]);
const categoryExtensionMap = new Map([
    [
        'image',
        new Set([
            '.png',
            '.jpg',
            '.jpeg',
            '.gif',
            '.svg',
            '.heic',
            '.heif',
            '.apng',
            '.tiff'
        ])
    ],
    [
        'video',
        new Set([
            '.mp4',
            '.mpeg',
            '.mpg',
            '.m4v',
            '.avi',
            '.mov',
            '.webm',
            '.wmv',
            '.mkv'
        ])
    ],
    [
        'audio',
        new Set([
            '.mp3',
            '.wav',
            '.ogg',
            '.m4a',
            '.flac',
            '.wma',
            '.aac'
        ])
    ],
    [
        'file',
        new Set([
            '.pdf',
            '.ppt',
            '.pptx',
            '.doc',
            '.docx',
            '.xsl',
            '.xslx',
            '.csv',
            '.tsv',
            '.ai',
            '.psd',
            '.json'
        ])
    ]
]);
const multipleCategoryIllustrations = [
    {
        pixelDensity: 1,
        src: _multiple_1xpng.default
    },
    {
        pixelDensity: 2,
        src: _multiple_2xpng.default
    }
];
const categoryIllustrationsMap = new Map([
    [
        'image',
        [
            {
                pixelDensity: 1,
                src: _image_1xpng.default
            },
            {
                pixelDensity: 2,
                src: _image_2xpng.default
            }
        ]
    ],
    [
        'video',
        [
            {
                pixelDensity: 1,
                src: _video_1xpng.default
            },
            {
                pixelDensity: 2,
                src: _video_2xpng.default
            }
        ]
    ],
    [
        'audio',
        [
            {
                pixelDensity: 1,
                src: _audio_1xpng.default
            },
            {
                pixelDensity: 2,
                src: _audio_2xpng.default
            }
        ]
    ],
    [
        'file',
        [
            {
                pixelDensity: 1,
                src: _file_1xpng.default
            },
            {
                pixelDensity: 2,
                src: _file_2xpng.default
            }
        ]
    ],
    [
        'multiple',
        multipleCategoryIllustrations
    ]
]);
const getUploadCategory = (mimeTypes)=>{
    let uploadCategory;
    if (mimeTypes == null || mimeTypes.length === 0) return 'multiple';
    for (const mimeType of mimeTypes){
        let curCategory;
        for (const [pattern, category] of mimeTypeCategoryMap.entries()) if (mimeType.startsWith(pattern)) {
            curCategory = category;
            break;
        }
        if (curCategory == null) {
            for (const [category, extensions] of categoryExtensionMap.entries())if (extensions.has(mimeType)) {
                curCategory = category;
                break;
            }
        }
        if (curCategory == null)
            return 'multiple';
        if (uploadCategory != null && curCategory !== uploadCategory)
            return 'multiple';
        uploadCategory = curCategory;
    }
    return uploadCategory ?? 'multiple';
};
const getUploadIllustrations = (mimeTypes)=>{
    const category = getUploadCategory(mimeTypes);
    return categoryIllustrationsMap.get(category) ?? multipleCategoryIllustrations;
};
