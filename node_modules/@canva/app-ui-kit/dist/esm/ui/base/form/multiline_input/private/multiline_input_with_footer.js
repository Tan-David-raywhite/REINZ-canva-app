import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import 'react';
import { MultilineInput } from './multiline_input';
import styles from './multiline_input.css';
export function MultilineInputWithFooter(props) {
    const { EndContent, StartContent, ref, ...multilineProps } = props;
    return _jsx(MultilineInput, {
        ...multilineProps,
        ref: ref,
        footer: _jsxs("div", {
            className: classNames(styles.footer, {
                [styles.footerDisabled]: props.disabled,
                [styles.footerReadOnly]: props.readOnly,
                [styles.footerFadein]: !props.borderless
            }),
            role: "none",
            children: [
                _jsx("span", {
                    children: StartContent
                }),
                _jsx("span", {
                    children: EndContent
                })
            ]
        })
    });
}
