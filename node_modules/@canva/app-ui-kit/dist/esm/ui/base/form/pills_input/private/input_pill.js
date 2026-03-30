import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import { Button } from '../../../button/button';
import { XIcon } from '../../../icons/x/icon';
import { Tooltip } from '../../../tooltip/tooltip';
import { useIsTruncated } from '../../../typography/truncated/truncated';
import { InheritColor, Text } from '../../../typography/typography';
import styles from './input_pill.css';
import { InputPillMessages } from './input_pill.messages';
function resolveDecorator(decorator, className) {
    const content = typeof decorator === 'function' ? decorator() : decorator;
    return content && _jsx("span", {
        className: className,
        children: content
    });
}
export function InputPill({ text, tone, disabled, maxWidth = '25u', start, onRemoveClick, ref }) {
    const { ref: isTruncatedRef, isTruncated } = useIsTruncated(text);
    const className = classNames({
        [styles.pill]: true,
        [styles.disabled]: disabled,
        [styles.maxWidth25U]: maxWidth === '25u',
        [styles.warn]: tone === 'warn',
        [styles.critical]: tone === 'critical'
    });
    const startContent = resolveDecorator(start, styles.start);
    const content = _jsx(Text, {
        ref: isTruncatedRef,
        tagName: "span",
        className: styles.text,
        tone: InheritColor,
        size: "medium",
        lineClamp: 1,
        children: text
    });
    const onRemoveCallback = React.useCallback((e)=>{
        e.stopPropagation();
        onRemoveClick?.();
    }, [
        onRemoveClick
    ]);
    const pill = _jsxs(_Fragment, {
        children: [
            startContent,
            content,
            onRemoveClick != null && _jsx(Button, {
                ref: ref,
                onClick: disabled ? undefined : onRemoveCallback,
                size: "tiny",
                variant: "tertiary",
                className: styles.removeButton,
                icon: XIcon,
                iconSize: "small",
                ariaLabel: InputPillMessages.remove(text),
                disabled: disabled
            })
        ]
    });
    if (isTruncated) return _jsx(Tooltip, {
        label: text,
        children: ({ tooltipId, ...triggerProps })=>_jsx("span", {
                className: className,
                "aria-describedby": isTruncated ? tooltipId : undefined,
                ...triggerProps,
                children: pill
            })
    });
    return _jsx("span", {
        className: className,
        children: pill
    });
}
