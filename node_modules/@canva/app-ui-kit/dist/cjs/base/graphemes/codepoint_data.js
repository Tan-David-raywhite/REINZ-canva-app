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
    get CR () {
        return CR;
    },
    get CR_ranges () {
        return CR_ranges;
    },
    get CR_value () {
        return CR_value;
    },
    get Control () {
        return Control;
    },
    get Control_ranges () {
        return Control_ranges;
    },
    get Control_values () {
        return Control_values;
    },
    get Extend () {
        return Extend;
    },
    get Extend_ranges () {
        return Extend_ranges;
    },
    get Extend_values () {
        return Extend_values;
    },
    get LF () {
        return LF;
    },
    get LF_ranges () {
        return LF_ranges;
    },
    get LF_value () {
        return LF_value;
    },
    get Other () {
        return Other;
    },
    get Prepend () {
        return Prepend;
    },
    get Prepend_ranges () {
        return Prepend_ranges;
    },
    get Prepend_values () {
        return Prepend_values;
    },
    get Regional_Indicator () {
        return Regional_Indicator;
    },
    get Regional_Indicator_ranges () {
        return Regional_Indicator_ranges;
    },
    get Regional_Indicator_values () {
        return Regional_Indicator_values;
    },
    get SpacingMark () {
        return SpacingMark;
    },
    get SpacingMark_ranges () {
        return SpacingMark_ranges;
    },
    get SpacingMark_values () {
        return SpacingMark_values;
    },
    get ZWJ () {
        return ZWJ;
    },
    get ZWJ_ranges () {
        return ZWJ_ranges;
    },
    get ZWJ_value () {
        return ZWJ_value;
    }
});
const Other = 0;
const Prepend = 1;
const CR = 2;
const LF = 3;
const Control = 4;
const Extend = 5;
const Regional_Indicator = 6;
const SpacingMark = 7;
const ZWJ = 8;
const Prepend_values = new Set([
    0x6dd,
    0x8e2
]);
const Prepend_ranges = [
    [
        0x600,
        0x605
    ]
];
const CR_value = 0xd;
const CR_ranges = [];
const LF_value = 0xa;
const LF_ranges = [];
const Control_values = new Set([
    0xb,
    0xc,
    0xad,
    0x61c,
    0x180e,
    0x200b,
    0x200e,
    0x200f,
    0xfeff
]);
const Control_ranges = [
    [
        0x0,
        0x9
    ],
    [
        0xe,
        0x1f
    ],
    [
        0x7f,
        0x9f
    ],
    [
        0x2028,
        0x202e
    ],
    [
        0x2060,
        0x2064
    ],
    [
        0x2066,
        0x206f
    ],
    [
        0xfff9,
        0xfffb
    ],
    [
        0x13430,
        0x13438
    ],
    [
        0x1bca0,
        0x1bca3
    ]
];
const Extend_values = new Set([
    0x5bf,
    0x5c1,
    0x5c2,
    0x5c4,
    0x5c5,
    0x5c7,
    0x670,
    0x6e7,
    0x6e8,
    0x93a,
    0x93c,
    0x94d,
    0x962,
    0x963,
    0x981,
    0x9bc,
    0x9be,
    0x9cd,
    0x9d7,
    0x9e2,
    0x9e3,
    0x9fe,
    0xa01,
    0xa02,
    0xa3c,
    0xa41,
    0xa42,
    0xa47,
    0xa48,
    0xa51,
    0xa70,
    0xa71,
    0xa75,
    0xa81,
    0xa82,
    0xabc,
    0xac7,
    0xac8,
    0xacd,
    0xae2,
    0xae3,
    0xb82,
    0xbbe,
    0xbc0,
    0xbcd,
    0xbd7,
    0xc00,
    0xc04,
    0xc55,
    0xc56,
    0xc62,
    0xc63,
    0xc81,
    0xcbc,
    0xcbf,
    0xcc2,
    0xcc6,
    0xccc,
    0xccd,
    0xcd5,
    0xcd6,
    0xce2,
    0xce3,
    0xd00,
    0xd01,
    0xd3b,
    0xd3c,
    0xd3e,
    0xd4d,
    0xd57,
    0xd62,
    0xd63,
    0xe31,
    0xeb1,
    0x1039,
    0x103a,
    0x103d,
    0x103e,
    0x1058,
    0x1059,
    0x1082,
    0x1085,
    0x1086,
    0x108d,
    0x109d,
    0x17b4,
    0x17b5,
    0x17c6,
    0x17dd,
    0x1b3c,
    0x1b42,
    0x200c,
    0x2d7f,
    0x3099,
    0x309a,
    0xa69e,
    0xa69f,
    0xa8ff,
    0xa9b3,
    0xa9bc,
    0xa9bd,
    0xaab0,
    0xaab7,
    0xaab8,
    0xaabe,
    0xaabf,
    0xaac1,
    0xfb1e,
    0xff9e,
    0xff9f,
    0x101fd,
    0x102e0,
    0x10eab,
    0x10eac,
    0x1da75,
    0x1da84,
    0x1e023,
    0x1e024
]);
const Extend_ranges = [
    [
        0x300,
        0x36f
    ],
    [
        0x483,
        0x489
    ],
    [
        0x591,
        0x5bd
    ],
    [
        0x610,
        0x61a
    ],
    [
        0x64b,
        0x65f
    ],
    [
        0x6d6,
        0x6dc
    ],
    [
        0x6df,
        0x6e4
    ],
    [
        0x6ea,
        0x6ed
    ],
    [
        0x8d3,
        0x8e1
    ],
    [
        0x8e3,
        0x902
    ],
    [
        0x941,
        0x948
    ],
    [
        0x951,
        0x957
    ],
    [
        0x9c1,
        0x9c4
    ],
    [
        0xa4b,
        0xa4d
    ],
    [
        0xac1,
        0xac5
    ],
    [
        0xafa,
        0xaff
    ],
    [
        0xc3e,
        0xc40
    ],
    [
        0xc46,
        0xc48
    ],
    [
        0xc4a,
        0xc4d
    ],
    [
        0xd41,
        0xd44
    ],
    [
        0xe34,
        0xe3a
    ],
    [
        0xe47,
        0xe4e
    ],
    [
        0xeb4,
        0xebc
    ],
    [
        0xec8,
        0xecd
    ],
    [
        0x102d,
        0x1030
    ],
    [
        0x1032,
        0x1037
    ],
    [
        0x105e,
        0x1060
    ],
    [
        0x1071,
        0x1074
    ],
    [
        0x1712,
        0x1714
    ],
    [
        0x17b7,
        0x17bd
    ],
    [
        0x17c9,
        0x17d3
    ],
    [
        0x1ab0,
        0x1ac0
    ],
    [
        0x1b00,
        0x1b03
    ],
    [
        0x1b34,
        0x1b3a
    ],
    [
        0x1b6b,
        0x1b73
    ],
    [
        0x1dc0,
        0x1df9
    ],
    [
        0x1dfb,
        0x1dff
    ],
    [
        0x20d0,
        0x20f0
    ],
    [
        0x2cef,
        0x2cf1
    ],
    [
        0x2de0,
        0x2dff
    ],
    [
        0x302a,
        0x302f
    ],
    [
        0xa66f,
        0xa672
    ],
    [
        0xa674,
        0xa67d
    ],
    [
        0xa8e0,
        0xa8f1
    ],
    [
        0xa980,
        0xa982
    ],
    [
        0xa9b6,
        0xa9b9
    ],
    [
        0xaab2,
        0xaab4
    ],
    [
        0xfe00,
        0xfe0f
    ],
    [
        0xfe20,
        0xfe2f
    ],
    [
        0x10376,
        0x1037a
    ],
    [
        0x10d24,
        0x10d27
    ],
    [
        0x1d242,
        0x1d244
    ],
    [
        0x1da00,
        0x1da36
    ],
    [
        0x1da3b,
        0x1da6c
    ],
    [
        0x1da9b,
        0x1da9f
    ],
    [
        0x1daa1,
        0x1daaf
    ],
    [
        0x1e000,
        0x1e006
    ],
    [
        0x1e008,
        0x1e018
    ],
    [
        0x1e01b,
        0x1e021
    ],
    [
        0x1e026,
        0x1e02a
    ],
    [
        0x1e130,
        0x1e136
    ],
    [
        0x1e2ec,
        0x1e2ef
    ],
    [
        0x1e8d0,
        0x1e8d6
    ],
    [
        0x1e944,
        0x1e94a
    ],
    [
        0x1f3fb,
        0x1f3ff
    ],
    [
        0xe0020,
        0xe007f
    ],
    [
        0xe0100,
        0xe01ef
    ]
];
const Regional_Indicator_values = new Set([]);
const Regional_Indicator_ranges = [
    [
        0x1f1e6,
        0x1f1ff
    ]
];
const SpacingMark_values = new Set([
    0x903,
    0x93b,
    0x94e,
    0x94f,
    0x982,
    0x983,
    0x9bf,
    0x9c0,
    0x9c7,
    0x9c8,
    0x9cb,
    0x9cc,
    0xbbf,
    0xbc1,
    0xbc2,
    0xd02,
    0xd03,
    0xd3f,
    0xd40,
    0xe33,
    0xeb3,
    0x17b6,
    0x17c7,
    0x17c8,
    0x1b04,
    0x1b3b,
    0x1b43,
    0x1b44,
    0xa983,
    0xa9b4,
    0xa9b5,
    0xa9ba,
    0xa9bb,
    0x16ff0,
    0x16ff1
]);
const SpacingMark_ranges = [
    [
        0x93e,
        0x940
    ],
    [
        0x949,
        0x94c
    ],
    [
        0xbc6,
        0xbc8
    ],
    [
        0xbca,
        0xbcc
    ],
    [
        0xc01,
        0xc03
    ],
    [
        0xc41,
        0xc44
    ],
    [
        0xd46,
        0xd48
    ],
    [
        0xd4a,
        0xd4c
    ],
    [
        0x17be,
        0x17c5
    ],
    [
        0x1b3d,
        0x1b41
    ],
    [
        0xa9be,
        0xa9c0
    ]
];
const ZWJ_value = 0x200d;
const ZWJ_ranges = [];
