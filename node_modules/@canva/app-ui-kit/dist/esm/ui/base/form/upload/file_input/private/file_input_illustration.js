import audio1x from './assets/upload_illustration/audio_1x.png';
import audio2x from './assets/upload_illustration/audio_2x.png';
import file1x from './assets/upload_illustration/file_1x.png';
import file2x from './assets/upload_illustration/file_2x.png';
import image1x from './assets/upload_illustration/image_1x.png';
import image2x from './assets/upload_illustration/image_2x.png';
import multiple1x from './assets/upload_illustration/multiple_1x.png';
import multiple2x from './assets/upload_illustration/multiple_2x.png';
import video1x from './assets/upload_illustration/video_1x.png';
import video2x from './assets/upload_illustration/video_2x.png';
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
        src: multiple1x
    },
    {
        pixelDensity: 2,
        src: multiple2x
    }
];
const categoryIllustrationsMap = new Map([
    [
        'image',
        [
            {
                pixelDensity: 1,
                src: image1x
            },
            {
                pixelDensity: 2,
                src: image2x
            }
        ]
    ],
    [
        'video',
        [
            {
                pixelDensity: 1,
                src: video1x
            },
            {
                pixelDensity: 2,
                src: video2x
            }
        ]
    ],
    [
        'audio',
        [
            {
                pixelDensity: 1,
                src: audio1x
            },
            {
                pixelDensity: 2,
                src: audio2x
            }
        ]
    ],
    [
        'file',
        [
            {
                pixelDensity: 1,
                src: file1x
            },
            {
                pixelDensity: 2,
                src: file2x
            }
        ]
    ],
    [
        'multiple',
        multipleCategoryIllustrations
    ]
]);
export const getUploadCategory = (mimeTypes)=>{
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
export const getUploadIllustrations = (mimeTypes)=>{
    const category = getUploadCategory(mimeTypes);
    return categoryIllustrationsMap.get(category) ?? multipleCategoryIllustrations;
};
