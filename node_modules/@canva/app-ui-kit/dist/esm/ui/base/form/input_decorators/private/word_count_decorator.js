import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { useInputValue } from '../../base_input/base_input';
import { WordsRemaining } from './words_remaining';
export const WordCountDecorator = React.memo(function WordCountDecorator({ max }) {
    const value = (useInputValue() ?? '').trim();
    const count = value.length ? value.split(/[\s\n]+/).length : 0;
    return _jsx(WordsRemaining, {
        count: count,
        max: max
    });
});
