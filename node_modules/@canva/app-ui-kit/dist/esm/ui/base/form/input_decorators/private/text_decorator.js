import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Box } from '../../../box/box';
import { Text } from '../../../typography/typography';
export const TextDecorator = React.memo(function TextDecorator(props) {
    return _jsx(Box, {
        paddingX: "1u",
        children: _jsx(Text, {
            tagName: "span",
            tone: "tertiary",
            lineClamp: 1,
            children: props.children
        })
    });
});
