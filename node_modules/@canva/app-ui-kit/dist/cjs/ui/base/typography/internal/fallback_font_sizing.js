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
    get storybookOnly () {
        return storybookOnly;
    },
    get useScaledFallbackFontStyles () {
        return useScaledFallbackFontStyles;
    }
});
const _preconditions = require('../../../../base/preconditions');
const _react = _interop_require_wildcard(require("react"));
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
function useScaledFallbackFontStyles({ componentType, fontWeight: fontWeightNameOrNumber, textContent }) {
    let enableScaling;
    let fontStackMode;
    let fontStack;
    switch(componentType){
        case 'title':
            enableScaling = true;
            const isVietnamese = typeof document !== 'undefined' ? document.querySelector('[lang|="vi"]') != null : false;
            fontStackMode = 'platform-agnostic';
            fontStack = isVietnamese ? FontFamily.vietnameseFontStack : FontFamily.titleFontStack;
            break;
        case 'none':
            enableScaling = false;
            fontStackMode = 'default';
            fontStack = [];
            break;
        default:
            throw new _preconditions.UnreachableError(componentType);
    }
    const contentString = _react.useMemo(()=>enableScaling ? stringForSizingWithoutDiacritics(textContent) : '', [
        enableScaling,
        textContent
    ]);
    const fontSize = 16;
    const fontWeight = fontWeightNumber(fontWeightNameOrNumber);
    const fontLoadStatuses = useFontLoadStatuses({
        fontStack,
        text: contentString,
        fontSize,
        fontWeight
    });
    if (!enableScaling) return undefined;
    if (fontLoadStatuses === undefined || [
        ...fontLoadStatuses.values()
    ].every((status)=>status === 'loaded'))
    return {
        fontStackMode
    };
    const isFontAvailable = (f)=>{
        switch(f.sourceType){
            case 'web':
                return fontLoadStatuses.get(f) === 'loaded';
            case 'local':
                return true;
            default:
                throw new _preconditions.UnreachableError(f.sourceType);
        }
    };
    const characterAdjusts = [];
    for (const char of contentString) {
        let char0AspectRatioInCurrentFont;
        let aspectRatioInCurrentFont;
        let aspectRatioInFinalFont;
        for (const fontFamily of fontStack){
            const charAspectRatio = fontFamily.charAspectRatio(char, fontWeight);
            if (charAspectRatio === undefined) continue;
            if (aspectRatioInCurrentFont === undefined && isFontAvailable(fontFamily)) {
                char0AspectRatioInCurrentFont = fontFamily.aspectRatioOfChar0(fontWeight);
                aspectRatioInCurrentFont = charAspectRatio;
            }
            if (aspectRatioInFinalFont === undefined) aspectRatioInFinalFont = charAspectRatio;
        }
        if (char0AspectRatioInCurrentFont === undefined || aspectRatioInCurrentFont === undefined || aspectRatioInFinalFont === undefined) continue;
        const currentWidth = aspectRatioInCurrentFont * fontSize;
        const finalWidth = aspectRatioInFinalFont * fontSize;
        const characterRatio = currentWidth / finalWidth;
        characterAdjusts.push(char0AspectRatioInCurrentFont / characterRatio);
    }
    let chWidthValue;
    if (characterAdjusts.length) chWidthValue = characterAdjusts.reduce((total, n)=>total + n) / characterAdjusts.length;
    return {
        fontStackMode: 'fallback',
        fontSizeAdjust: chWidthValue ? {
            fontMetric: 'ch-width',
            fontHeightMultiple: chWidthValue
        } : undefined
    };
}
function stringForSizingWithoutDiacritics(node) {
    return stringForSizing(node).normalize('NFKD').replace(/\p{Diacritic}/gu, '');
}
function stringForSizing(node) {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return node.toString();
    if (Array.isArray(node)) return node.map((child)=>stringForSizing(child)).join('');
    if (_react.isValidElement(node) && node.props.children) return stringForSizing(node.props.children);
    return '';
}
function useFontLoadStatuses({ fontStack, text, fontSize, fontWeight }) {
    const [tasks, setTasks] = _react.useState(()=>new Map());
    const createTaskKey = _react.useCallback((font)=>{
        return `${font.postscriptName}:${text}:${fontSize}:${fontWeight}`;
    }, [
        text,
        fontSize,
        fontWeight
    ]);
    const getTask = _react.useCallback((fontFamily)=>{
        const key = createTaskKey(fontFamily);
        return tasks.get(key);
    }, [
        createTaskKey,
        tasks
    ]);
    const upsertTask = _react.useCallback((fontFamily, task)=>{
        setTasks((prevTasks)=>{
            const newTasks = new Map(prevTasks);
            const key = createTaskKey(fontFamily);
            newTasks.set(key, task);
            return newTasks;
        });
    }, [
        createTaskKey
    ]);
    if (fontStack.length === 0) return undefined;
    const result = new Map();
    for (const fontFamily of fontStack){
        if (fontFamily.sourceType === 'local') {
            result.set(fontFamily, 'loaded');
            continue;
        }
        let task = getTask(fontFamily);
        if (!task && typeof document !== 'undefined' && document.fonts) {
            const newTask = {
                status: 'loading'
            };
            task = newTask;
            upsertTask(fontFamily, newTask);
            const cssFontQuery = fontFamily.cssFontQuery({
                fontSize,
                fontWeight
            });
            const promise = document.fonts.load(cssFontQuery, text).then(()=>{
                newTask.status = 'loaded';
                upsertTask(fontFamily, newTask);
                return 'loaded';
            }, ()=>{
                newTask.status = 'failed';
                upsertTask(fontFamily, newTask);
                return 'failed';
            });
            newTask.promise = promise;
        }
        result.set(fontFamily, task?.status ?? 'loading');
    }
    return result;
}
class FontFamily {
    static get titleFontStack() {
        return [
            FontFamily.canvaSansDisplay,
            FontFamily.arial
        ];
    }
    static get vietnameseFontStack() {
        return [
            FontFamily.arial
        ];
    }
    charAspectRatio(char, fontWeight) {
        const ratios = this.charAspectRatios.get(char);
        if (!ratios) return undefined;
        if (fontWeight >= 700) return ratios.bold;
        if (fontWeight <= 400) return ratios.regular;
        const percent = (fontWeight - 400) / 300;
        return ratios.regular + (ratios.bold - ratios.regular) * percent;
    }
    aspectRatioOfChar0(fontWeight) {
        return this.charAspectRatio('0', fontWeight);
    }
    cssFontQuery({ fontSize, fontWeight }) {
        return `${fontWeight} ${fontSize}px "${this.postscriptName}"`;
    }
    constructor(postscriptName, sourceType, charAspectRatios){
        this.postscriptName = postscriptName;
        this.sourceType = sourceType;
        this.charAspectRatios = charAspectRatios;
        _preconditions.Preconditions.checkArgument(charAspectRatios.has('0'));
    }
}
FontFamily.canvaSansDisplay = new FontFamily('Canva Sans', 'web', new Map([
    [
        ' ',
        {
            regular: 0.2241,
            bold: 0.2041
        }
    ],
    [
        '!',
        {
            regular: 0.2524,
            bold: 0.2764
        }
    ],
    [
        '"',
        {
            regular: 0.3472,
            bold: 0.4102
        }
    ],
    [
        '#',
        {
            regular: 0.6572,
            bold: 0.6758
        }
    ],
    [
        '$',
        {
            regular: 0.6138,
            bold: 0.6411
        }
    ],
    [
        '%',
        {
            regular: 0.832,
            bold: 0.877
        }
    ],
    [
        '&',
        {
            regular: 0.7061,
            bold: 0.7231
        }
    ],
    [
        "'",
        {
            regular: 0.1821,
            bold: 0.2222
        }
    ],
    [
        '(',
        {
            regular: 0.2871,
            bold: 0.3188
        }
    ],
    [
        ')',
        {
            regular: 0.2871,
            bold: 0.3188
        }
    ],
    [
        '*',
        {
            regular: 0.3389,
            bold: 0.3398
        }
    ],
    [
        '+',
        {
            regular: 0.5117,
            bold: 0.5288
        }
    ],
    [
        ',',
        {
            regular: 0.23,
            bold: 0.2319
        }
    ],
    [
        '-',
        {
            regular: 0.3691,
            bold: 0.3882
        }
    ],
    [
        '.',
        {
            regular: 0.2241,
            bold: 0.228
        }
    ],
    [
        '/',
        {
            regular: 0.3019,
            bold: 0.3258
        }
    ],
    [
        '0',
        {
            regular: 0.6899,
            bold: 0.728
        }
    ],
    [
        '1',
        {
            regular: 0.3584,
            bold: 0.3921
        }
    ],
    [
        '2',
        {
            regular: 0.5361,
            bold: 0.5698
        }
    ],
    [
        '3',
        {
            regular: 0.5679,
            bold: 0.6011
        }
    ],
    [
        '4',
        {
            regular: 0.6099,
            bold: 0.6357
        }
    ],
    [
        '5',
        {
            regular: 0.582,
            bold: 0.6069
        }
    ],
    [
        '6',
        {
            regular: 0.6138,
            bold: 0.6318
        }
    ],
    [
        '7',
        {
            regular: 0.5059,
            bold: 0.5449
        }
    ],
    [
        '8',
        {
            regular: 0.5918,
            bold: 0.6118
        }
    ],
    [
        '9',
        {
            regular: 0.6138,
            bold: 0.626
        }
    ],
    [
        ':',
        {
            regular: 0.2241,
            bold: 0.228
        }
    ],
    [
        ';',
        {
            regular: 0.23,
            bold: 0.2319
        }
    ],
    [
        '<',
        {
            regular: 0.5229,
            bold: 0.5391
        }
    ],
    [
        '=',
        {
            regular: 0.5371,
            bold: 0.5532
        }
    ],
    [
        '>',
        {
            regular: 0.522,
            bold: 0.5391
        }
    ],
    [
        '?',
        {
            regular: 0.4922,
            bold: 0.5381
        }
    ],
    [
        '@',
        {
            regular: 0.9121,
            bold: 0.938
        }
    ],
    [
        'A',
        {
            regular: 0.6919,
            bold: 0.7529
        }
    ],
    [
        'B',
        {
            regular: 0.7021,
            bold: 0.6982
        }
    ],
    [
        'C',
        {
            regular: 0.7113,
            bold: 0.7235
        }
    ],
    [
        'D',
        {
            regular: 0.7446,
            bold: 0.7627
        }
    ],
    [
        'E',
        {
            regular: 0.6021,
            bold: 0.6182
        }
    ],
    [
        'F',
        {
            regular: 0.5811,
            bold: 0.5811
        }
    ],
    [
        'G',
        {
            regular: 0.7559,
            bold: 0.7681
        }
    ],
    [
        'H',
        {
            regular: 0.771,
            bold: 0.7871
        }
    ],
    [
        'I',
        {
            regular: 0.2632,
            bold: 0.2734
        }
    ],
    [
        'J',
        {
            regular: 0.533,
            bold: 0.557
        }
    ],
    [
        'K',
        {
            regular: 0.626,
            bold: 0.6499
        }
    ],
    [
        'L',
        {
            regular: 0.5298,
            bold: 0.5449
        }
    ],
    [
        'M',
        {
            regular: 0.8916,
            bold: 0.9116
        }
    ],
    [
        'N',
        {
            regular: 0.7671,
            bold: 0.7773
        }
    ],
    [
        'O',
        {
            regular: 0.814,
            bold: 0.8218
        }
    ],
    [
        'P',
        {
            regular: 0.6382,
            bold: 0.6499
        }
    ],
    [
        'Q',
        {
            regular: 0.814,
            bold: 0.8218
        }
    ],
    [
        'R',
        {
            regular: 0.6509,
            bold: 0.6631
        }
    ],
    [
        'S',
        {
            regular: 0.6138,
            bold: 0.6411
        }
    ],
    [
        'T',
        {
            regular: 0.582,
            bold: 0.624
        }
    ],
    [
        'U',
        {
            regular: 0.73,
            bold: 0.751
        }
    ],
    [
        'V',
        {
            regular: 0.6631,
            bold: 0.7041
        }
    ],
    [
        'W',
        {
            regular: 0.9258,
            bold: 0.9751
        }
    ],
    [
        'X',
        {
            regular: 0.6182,
            bold: 0.6509
        }
    ],
    [
        'Y',
        {
            regular: 0.6182,
            bold: 0.6509
        }
    ],
    [
        'Z',
        {
            regular: 0.5649,
            bold: 0.6001
        }
    ],
    [
        '[',
        {
            regular: 0.3369,
            bold: 0.3369
        }
    ],
    [
        '\\',
        {
            regular: 0.397,
            bold: 0.4209
        }
    ],
    [
        ']',
        {
            regular: 0.3369,
            bold: 0.3369
        }
    ],
    [
        '^',
        {
            regular: 0.4409,
            bold: 0.4712
        }
    ],
    [
        '_',
        {
            regular: 0.4429,
            bold: 0.4712
        }
    ],
    [
        '`',
        {
            regular: 0.2822,
            bold: 0.3062
        }
    ],
    [
        'a',
        {
            regular: 0.5801,
            bold: 0.5981
        }
    ],
    [
        'b',
        {
            regular: 0.6543,
            bold: 0.6655
        }
    ],
    [
        'c',
        {
            regular: 0.564,
            bold: 0.5708
        }
    ],
    [
        'd',
        {
            regular: 0.6548,
            bold: 0.665
        }
    ],
    [
        'e',
        {
            regular: 0.5908,
            bold: 0.5952
        }
    ],
    [
        'f',
        {
            regular: 0.3966,
            bold: 0.4259
        }
    ],
    [
        'g',
        {
            regular: 0.5381,
            bold: 0.5479
        }
    ],
    [
        'h',
        {
            regular: 0.6118,
            bold: 0.6182
        }
    ],
    [
        'i',
        {
            regular: 0.2388,
            bold: 0.249
        }
    ],
    [
        'j',
        {
            regular: 0.2524,
            bold: 0.2679
        }
    ],
    [
        'k',
        {
            regular: 0.4868,
            bold: 0.5332
        }
    ],
    [
        'l',
        {
            regular: 0.2642,
            bold: 0.2788
        }
    ],
    [
        'm',
        {
            regular: 0.9321,
            bold: 0.9346
        }
    ],
    [
        'n',
        {
            regular: 0.6118,
            bold: 0.6182
        }
    ],
    [
        'o',
        {
            regular: 0.6318,
            bold: 0.6431
        }
    ],
    [
        'p',
        {
            regular: 0.6543,
            bold: 0.6655
        }
    ],
    [
        'q',
        {
            regular: 0.6548,
            bold: 0.665
        }
    ],
    [
        'r',
        {
            regular: 0.4551,
            bold: 0.481
        }
    ],
    [
        's',
        {
            regular: 0.501,
            bold: 0.519
        }
    ],
    [
        't',
        {
            regular: 0.4243,
            bold: 0.4621
        }
    ],
    [
        'u',
        {
            regular: 0.604,
            bold: 0.6099
        }
    ],
    [
        'v',
        {
            regular: 0.5508,
            bold: 0.6001
        }
    ],
    [
        'w',
        {
            regular: 0.7549,
            bold: 0.7959
        }
    ],
    [
        'x',
        {
            regular: 0.502,
            bold: 0.5342
        }
    ],
    [
        'y',
        {
            regular: 0.6138,
            bold: 0.6138
        }
    ],
    [
        'z',
        {
            regular: 0.4512,
            bold: 0.4731
        }
    ],
    [
        '{',
        {
            regular: 0.4082,
            bold: 0.3911
        }
    ],
    [
        '|',
        {
            regular: 0.271,
            bold: 0.2822
        }
    ],
    [
        '}',
        {
            regular: 0.4077,
            bold: 0.3911
        }
    ],
    [
        '~',
        {
            regular: 0.5122,
            bold: 0.5278
        }
    ]
]));
FontFamily.arial = new FontFamily('Arial', 'local', new Map([
    [
        ' ',
        {
            regular: 0.2778,
            bold: 0.2778
        }
    ],
    [
        '!',
        {
            regular: 0.2778,
            bold: 0.333
        }
    ],
    [
        '"',
        {
            regular: 0.355,
            bold: 0.4741
        }
    ],
    [
        '#',
        {
            regular: 0.5562,
            bold: 0.5562
        }
    ],
    [
        '$',
        {
            regular: 0.5562,
            bold: 0.5562
        }
    ],
    [
        '%',
        {
            regular: 0.8892,
            bold: 0.8892
        }
    ],
    [
        '&',
        {
            regular: 0.667,
            bold: 0.7222
        }
    ],
    [
        "'",
        {
            regular: 0.1909,
            bold: 0.2378
        }
    ],
    [
        '(',
        {
            regular: 0.333,
            bold: 0.333
        }
    ],
    [
        ')',
        {
            regular: 0.333,
            bold: 0.333
        }
    ],
    [
        '*',
        {
            regular: 0.3892,
            bold: 0.3892
        }
    ],
    [
        '+',
        {
            regular: 0.584,
            bold: 0.584
        }
    ],
    [
        ',',
        {
            regular: 0.2778,
            bold: 0.2778
        }
    ],
    [
        '-',
        {
            regular: 0.333,
            bold: 0.333
        }
    ],
    [
        '.',
        {
            regular: 0.2778,
            bold: 0.2778
        }
    ],
    [
        '/',
        {
            regular: 0.2778,
            bold: 0.2778
        }
    ],
    [
        '0',
        {
            regular: 0.5562,
            bold: 0.5562
        }
    ],
    [
        '1',
        {
            regular: 0.507,
            bold: 0.5197
        }
    ],
    [
        '2',
        {
            regular: 0.5562,
            bold: 0.5562
        }
    ],
    [
        '3',
        {
            regular: 0.5562,
            bold: 0.5562
        }
    ],
    [
        '4',
        {
            regular: 0.5562,
            bold: 0.5562
        }
    ],
    [
        '5',
        {
            regular: 0.5562,
            bold: 0.5562
        }
    ],
    [
        '6',
        {
            regular: 0.5562,
            bold: 0.5562
        }
    ],
    [
        '7',
        {
            regular: 0.5562,
            bold: 0.5562
        }
    ],
    [
        '8',
        {
            regular: 0.5562,
            bold: 0.5562
        }
    ],
    [
        '9',
        {
            regular: 0.5562,
            bold: 0.5562
        }
    ],
    [
        ':',
        {
            regular: 0.2778,
            bold: 0.333
        }
    ],
    [
        ';',
        {
            regular: 0.2778,
            bold: 0.333
        }
    ],
    [
        '<',
        {
            regular: 0.584,
            bold: 0.584
        }
    ],
    [
        '=',
        {
            regular: 0.584,
            bold: 0.584
        }
    ],
    [
        '>',
        {
            regular: 0.584,
            bold: 0.584
        }
    ],
    [
        '?',
        {
            regular: 0.5562,
            bold: 0.6108
        }
    ],
    [
        '@',
        {
            regular: 1.0151,
            bold: 0.9751
        }
    ],
    [
        'A',
        {
            regular: 0.667,
            bold: 0.7222
        }
    ],
    [
        'B',
        {
            regular: 0.667,
            bold: 0.7222
        }
    ],
    [
        'C',
        {
            regular: 0.7222,
            bold: 0.7222
        }
    ],
    [
        'D',
        {
            regular: 0.7222,
            bold: 0.7222
        }
    ],
    [
        'E',
        {
            regular: 0.667,
            bold: 0.667
        }
    ],
    [
        'F',
        {
            regular: 0.6108,
            bold: 0.6108
        }
    ],
    [
        'G',
        {
            regular: 0.7778,
            bold: 0.7778
        }
    ],
    [
        'H',
        {
            regular: 0.7222,
            bold: 0.7222
        }
    ],
    [
        'I',
        {
            regular: 0.2778,
            bold: 0.2778
        }
    ],
    [
        'J',
        {
            regular: 0.5,
            bold: 0.5562
        }
    ],
    [
        'K',
        {
            regular: 0.667,
            bold: 0.7222
        }
    ],
    [
        'L',
        {
            regular: 0.5562,
            bold: 0.6108
        }
    ],
    [
        'M',
        {
            regular: 0.833,
            bold: 0.833
        }
    ],
    [
        'N',
        {
            regular: 0.7222,
            bold: 0.7222
        }
    ],
    [
        'O',
        {
            regular: 0.7778,
            bold: 0.7778
        }
    ],
    [
        'P',
        {
            regular: 0.667,
            bold: 0.667
        }
    ],
    [
        'Q',
        {
            regular: 0.7778,
            bold: 0.7778
        }
    ],
    [
        'R',
        {
            regular: 0.7222,
            bold: 0.7222
        }
    ],
    [
        'S',
        {
            regular: 0.667,
            bold: 0.667
        }
    ],
    [
        'T',
        {
            regular: 0.6108,
            bold: 0.6108
        }
    ],
    [
        'U',
        {
            regular: 0.7222,
            bold: 0.7222
        }
    ],
    [
        'V',
        {
            regular: 0.667,
            bold: 0.667
        }
    ],
    [
        'W',
        {
            regular: 0.9438,
            bold: 0.9438
        }
    ],
    [
        'X',
        {
            regular: 0.667,
            bold: 0.667
        }
    ],
    [
        'Y',
        {
            regular: 0.667,
            bold: 0.667
        }
    ],
    [
        'Z',
        {
            regular: 0.6108,
            bold: 0.6108
        }
    ],
    [
        '[',
        {
            regular: 0.2778,
            bold: 0.333
        }
    ],
    [
        '\\',
        {
            regular: 0.2778,
            bold: 0.2778
        }
    ],
    [
        ']',
        {
            regular: 0.2778,
            bold: 0.333
        }
    ],
    [
        '^',
        {
            regular: 0.4692,
            bold: 0.584
        }
    ],
    [
        '_',
        {
            regular: 0.5562,
            bold: 0.5562
        }
    ],
    [
        '`',
        {
            regular: 0.333,
            bold: 0.333
        }
    ],
    [
        'a',
        {
            regular: 0.5562,
            bold: 0.5562
        }
    ],
    [
        'b',
        {
            regular: 0.5562,
            bold: 0.6108
        }
    ],
    [
        'c',
        {
            regular: 0.5,
            bold: 0.5562
        }
    ],
    [
        'd',
        {
            regular: 0.5562,
            bold: 0.6108
        }
    ],
    [
        'e',
        {
            regular: 0.5562,
            bold: 0.5562
        }
    ],
    [
        'f',
        {
            regular: 0.2661,
            bold: 0.333
        }
    ],
    [
        'g',
        {
            regular: 0.5562,
            bold: 0.6108
        }
    ],
    [
        'h',
        {
            regular: 0.5562,
            bold: 0.6108
        }
    ],
    [
        'i',
        {
            regular: 0.2222,
            bold: 0.2778
        }
    ],
    [
        'j',
        {
            regular: 0.2222,
            bold: 0.2778
        }
    ],
    [
        'k',
        {
            regular: 0.5,
            bold: 0.5562
        }
    ],
    [
        'l',
        {
            regular: 0.2222,
            bold: 0.2778
        }
    ],
    [
        'm',
        {
            regular: 0.833,
            bold: 0.8892
        }
    ],
    [
        'n',
        {
            regular: 0.5562,
            bold: 0.6108
        }
    ],
    [
        'o',
        {
            regular: 0.5562,
            bold: 0.6108
        }
    ],
    [
        'p',
        {
            regular: 0.5562,
            bold: 0.6108
        }
    ],
    [
        'q',
        {
            regular: 0.5562,
            bold: 0.6108
        }
    ],
    [
        'r',
        {
            regular: 0.333,
            bold: 0.3892
        }
    ],
    [
        's',
        {
            regular: 0.5,
            bold: 0.5562
        }
    ],
    [
        't',
        {
            regular: 0.2778,
            bold: 0.333
        }
    ],
    [
        'u',
        {
            regular: 0.5562,
            bold: 0.6108
        }
    ],
    [
        'v',
        {
            regular: 0.5,
            bold: 0.5562
        }
    ],
    [
        'w',
        {
            regular: 0.7222,
            bold: 0.7778
        }
    ],
    [
        'x',
        {
            regular: 0.5,
            bold: 0.5562
        }
    ],
    [
        'y',
        {
            regular: 0.5,
            bold: 0.5562
        }
    ],
    [
        'z',
        {
            regular: 0.5,
            bold: 0.5
        }
    ],
    [
        '{',
        {
            regular: 0.334,
            bold: 0.3892
        }
    ],
    [
        '|',
        {
            regular: 0.2598,
            bold: 0.2798
        }
    ],
    [
        '}',
        {
            regular: 0.334,
            bold: 0.3892
        }
    ],
    [
        '~',
        {
            regular: 0.584,
            bold: 0.584
        }
    ]
]));
const storybookOnly = {
    useFontLoadStatuses,
    FontFamily
};
function fontWeightNumber(weight) {
    if (typeof weight === 'number') return weight;
    switch(weight){
        case 'regular':
            return 400;
        case 'medium':
            return 500;
        case 'semibold':
            return 600;
        case 'bold':
            return 700;
        default:
            throw new _preconditions.UnreachableError(weight);
    }
}
