import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames';
import 'react';
import { ScreenReaderContent } from '../../../a11y/screen_reader_content/screen_reader_content';
import { Box } from '../../../box/box';
import { AnimatedSpinnerIcon } from '../../../icons/animated_spinner/icon';
import { ButtonMessages } from './base_button.messages';
import styles from './loading_wrapper.css';
export function LoadingWrapper(
    { loading = false, size = 'medium', icon = ({ size })=> _jsx(AnimatedSpinnerIcon, {
            size: size
        }), message = ButtonMessages.loading(), children }
) {
    return _jsxs(_Fragment, {
        children: [
            loading && _jsxs(Box, {
                tagName: "span",
                position: "absolute",
                inset: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                children: [
                    _jsx(ScreenReaderContent, {
                        children: message
                    }),
                    icon({
                        size
                    })
                ]
            }),
            _jsx("span", {
                className: classNames(styles.content, loading && styles.loading),
                "aria-hidden": loading,
                children: children
            })
        ]
    });
}
