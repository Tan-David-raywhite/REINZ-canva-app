"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "KeyMap", {
    enumerable: true,
    get: function() {
        return KeyMap;
    }
});
class KeyMap {
    static get shiftMap() {
        if (KeyMap._shiftMap == null) {
            const shiftMap = {
                ['`']: '~',
                ['1']: '!',
                ['2']: '@',
                ['3']: '#',
                ['4']: '$',
                ['5']: '%',
                ['6']: '^',
                ['7']: '&',
                ['8']: '*',
                ['9']: '(',
                ['0']: ')',
                ['-']: '_',
                ['=']: '+',
                ['[']: '{',
                [']']: '}',
                [';']: ':',
                ["'"]: '"',
                [',']: '<',
                ['.']: '>',
                ['/']: '?',
                ['\\']: '|'
            };
            for(let letter = 'a'; letter <= 'z'; letter = String.fromCharCode(letter.charCodeAt(0) + 1))shiftMap[letter] = letter.toUpperCase();
            KeyMap._shiftMap = shiftMap;
        }
        return KeyMap._shiftMap;
    }
    static get reverseShiftMap() {
        if (KeyMap._reverseShiftMap == null) KeyMap._reverseShiftMap = Object.keys(KeyMap.shiftMap).reduce((obj, key)=>{
            obj[KeyMap.shiftMap[key]] = key;
            return obj;
        }, {});
        return KeyMap._reverseShiftMap;
    }
    static get codeToKey() {
        if (KeyMap._codeToKey == null) {
            const codeToKey = {
                ['Backquote']: '`',
                ['Minus']: '-',
                ['Equal']: '=',
                ['BracketLeft']: '[',
                ['BracketRight']: ']',
                ['Backslash']: '\\',
                ['Semicolon']: ';',
                ['Quote']: "'",
                ['Comma']: ',',
                ['Period']: '.',
                ['Slash']: '/',
                ['Space']: ' '
            };
            for(let num = 0; num < 10; num++)codeToKey[`Digit${num}`] = `${num}`;
            for(let letter = 'A'; letter <= 'Z'; letter = String.fromCharCode(letter.charCodeAt(0) + 1))codeToKey[`Key${letter}`] = letter.toLowerCase();
            KeyMap._codeToKey = codeToKey;
        }
        return KeyMap._codeToKey;
    }
    static get englishKeys() {
        if (KeyMap._englishKeys == null) {
            const englishKeys = new Set();
            Object.keys(KeyMap.shiftMap).forEach((k)=>{
                englishKeys.add(k);
                englishKeys.add(KeyMap.shiftMap[k]);
            });
            KeyMap._englishKeys = englishKeys;
        }
        return KeyMap._englishKeys;
    }
}
