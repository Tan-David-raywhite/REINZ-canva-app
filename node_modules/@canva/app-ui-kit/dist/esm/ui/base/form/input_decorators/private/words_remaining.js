import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import 'react';
import { useAnnounceOnUpdate } from '../../../a11y/announcer/announcer';
import { Box } from '../../../box/box';
import { Text } from '../../../typography/typography';
import { InputDecoratorsMessages } from './input_decorators.messages';
export const WordsRemaining = ({ count, max, margins = 'default', textSize, id })=>{
    const priority = count > max ? 'high' : 'medium';
    useAnnounceOnUpdate(InputDecoratorsMessages.wordsUsed(count, max), count, {
        priority,
        debounceMs: 200
    });
    return _jsx(Box, {
        padding: margins === 'default' ? '1u' : undefined,
        paddingX: margins === 'horizontal' ? '1u' : undefined,
        paddingY: margins === 'vertical' ? '1u' : undefined,
        children: _jsx(Text, {
            size: textSize,
            alignment: "end",
            tone: count > max ? 'critical' : 'tertiary',
            children: _jsxs("span", {
                id: id,
                "aria-label": InputDecoratorsMessages.wordsUsed(count, max),
                children: [
                    count,
                    "/",
                    max
                ]
            })
        })
    });
};
