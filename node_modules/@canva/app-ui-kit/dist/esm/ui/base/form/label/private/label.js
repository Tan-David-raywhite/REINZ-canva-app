import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import { Text } from '../../../typography/typography';
import styles, { getStyle } from './label.css';
import { LabelMessages as Messages } from './label.messages';
const BaseLabelText = ({ id, className, disabled = false, fontVariant, children })=>{
    if (!children && children !== 0) return null;
    const classes = classNames(className, styles.label, getStyle(fontVariant), {
        [styles.disabled]: disabled
    });
    return typeof children === 'string' ? _jsx("p", {
        id: id,
        className: classes,
        children: children
    }) : _jsx("div", {
        id: id,
        className: classes,
        children: children
    });
};
const MediumLabelText = (props)=>_jsx(BaseLabelText, {
        fontVariant: "medium",
        ...props
    });
export const RadioLabelText = MediumLabelText;
export const CheckboxLabelText = MediumLabelText;
export const LabelText = (props)=>_jsx(BaseLabelText, {
        fontVariant: "small",
        ...props
    });
export const LabelMediumText = (props)=>_jsx(BaseLabelText, {
        fontVariant: "medium",
        ...props
    });
export const Label = ({ children, disabled, htmlFor, id, variant = 'bold', size = 'medium', stopClickPropagation, marker })=>{
    const tagName = React.useMemo(()=>typeof children === 'string' ? 'span' : 'div', [
        children
    ]);
    if (children == null) return null;
    const stopPropagation = (event)=>event.stopPropagation();
    return (_jsxs("label", {
            id: id,
            htmlFor: htmlFor,
            onClick: stopClickPropagation ? stopPropagation : undefined,
            children: [
                _jsx(Text, {
                    tagName: tagName,
                    size: size,
                    weight: variant,
                    className: classNames(styles.labelText, {
                        [styles.disabled]: disabled
                    }),
                    tone: disabled ? 'tertiary' : 'primary',
                    children: children
                }),
                marker === 'optional' && _jsx(Text, {
                    tagName: "span",
                    size: size,
                    weight: variant,
                    tone: "tertiary",
                    children: ` ${Messages.optionalText()}`
                }),
                marker === 'required' && _jsx(Text, {
                    tagName: "span",
                    size: size,
                    weight: "regular",
                    tone: "critical",
                    ariaHidden: true,
                    children: ` *`
                })
            ]
        }));
};
