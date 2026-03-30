"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "WordsRemaining", {
    enumerable: true,
    get: function() {
        return WordsRemaining;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _announcer = require('../../../a11y/announcer/announcer');
const _box = require('../../../box/box');
const _typography = require('../../../typography/typography');
const _input_decoratorsmessages = require("./input_decorators.messages");
const WordsRemaining = ({ count, max, margins = 'default', textSize, id })=>{
    const priority = count > max ? 'high' : 'medium';
    (0, _announcer.useAnnounceOnUpdate)(_input_decoratorsmessages.InputDecoratorsMessages.wordsUsed(count, max), count, {
        priority,
        debounceMs: 200
    });
    return (0, _jsxruntime.jsx)(_box.Box, {
        padding: margins === 'default' ? '1u' : undefined,
        paddingX: margins === 'horizontal' ? '1u' : undefined,
        paddingY: margins === 'vertical' ? '1u' : undefined,
        children: (0, _jsxruntime.jsx)(_typography.Text, {
            size: textSize,
            alignment: "end",
            tone: count > max ? 'critical' : 'tertiary',
            children: (0, _jsxruntime.jsxs)("span", {
                id: id,
                "aria-label": _input_decoratorsmessages.InputDecoratorsMessages.wordsUsed(count, max),
                children: [
                    count,
                    "/",
                    max
                ]
            })
        })
    });
};
