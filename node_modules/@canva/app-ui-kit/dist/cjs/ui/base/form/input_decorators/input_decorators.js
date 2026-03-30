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
    get ButtonDecorator () {
        return _button_decorator.ButtonDecorator;
    },
    get CharCountDecorator () {
        return _char_count_decorator.CharCountDecorator;
    },
    get CharsRemaining () {
        return _chars_remaining.CharsRemaining;
    },
    get ClearDecorator () {
        return _clear_decorator.ClearDecorator;
    },
    get CopyDecorator () {
        return _copy_decorator.CopyDecorator;
    },
    get ShowPasswordDecorator () {
        return _show_password_decorator.ShowPasswordDecorator;
    },
    get TextDecorator () {
        return _text_decorator.TextDecorator;
    },
    get TimezoneDecorator () {
        return _timezone_decorator.TimezoneDecorator;
    },
    get WordCountDecorator () {
        return _word_count_decorator.WordCountDecorator;
    },
    get WordsRemaining () {
        return _words_remaining.WordsRemaining;
    }
});
const _button_decorator = require("./private/button_decorator");
const _char_count_decorator = require("./private/char_count_decorator");
const _chars_remaining = require("./private/chars_remaining");
const _clear_decorator = require("./private/clear_decorator");
const _copy_decorator = require("./private/copy_decorator");
const _show_password_decorator = require("./private/show_password_decorator");
const _text_decorator = require("./private/text_decorator");
const _timezone_decorator = require("./private/timezone_decorator");
const _word_count_decorator = require("./private/word_count_decorator");
const _words_remaining = require("./private/words_remaining");
