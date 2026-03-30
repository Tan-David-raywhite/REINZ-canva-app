import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Button } from '../../../button/button';
import { createClipboard } from '../../../clipboard/clipboard';
import { useInputValue } from '../../base_input/base_input';
import { InputDecoratorsMessages } from './input_decorators.messages';
export const CopyDecorator = React.memo(
    function CopyDecorator({ label = InputDecoratorsMessages.copy(), copiedLabel = InputDecoratorsMessages.copied(), onCopy, tone = 'primary', disabled = false }) {
        const value = useInputValue();
        const [copied, setCopied] = React.useState(false);
        const copyToClipboard = React.useMemo(()=>createClipboard(), []);
        const onClick = React.useCallback(()=>{
            copyToClipboard(value);
            onCopy?.();
            setCopied(true);
        }, [
            copyToClipboard,
            onCopy,
            value
        ]);
        const resetCopied = React.useCallback(()=>setCopied(false), []);
        return _jsx(Button, {
            size: "small",
            variant: tone,
            iconSize: "medium",
            onClick: onClick,
            onBlur: resetCopied,
            disabled: disabled,
            children: copied ? copiedLabel : label
        });
    }
);
