import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import { Box } from '../../../box/box';
import { Divider } from '../../../divider/divider';
import { useInputControls, useInputValue } from '../../base_input/base_input';
import { ClearIcon } from '../../../icons/clear/icon';
import { ButtonDecorator } from './button_decorator';
import styles from './clear_decorator.css';
import { InputDecoratorsMessages } from './input_decorators.messages';
export const ClearDecorator = React.memo(
    function ClearDecorator({ when = 'not-empty', label = InputDecoratorsMessages.clear(), onClear, showDivider }) {
        const controls = useInputControls();
        const value = useInputValue();
        const onClick = React.useCallback(()=>{
            controls?.setValue('');
            controls?.focus();
            onClear?.();
        }, [
            controls,
            onClear
        ]);
        if (when === 'not-empty' && value === '') return null;
        return _jsxs(_Fragment, {
            children: [
                _jsx(ButtonDecorator, {
                    label: label,
                    icon: ()=>_jsx(ClearIcon, {
                            size: "medium",
                            className: styles.clearIcon
                        }),
                    onClick: onClick
                }),
                showDivider && _jsx(Box, {
                    paddingY: "1u",
                    height: "full",
                    children: _jsx(Divider, {
                        direction: "vertical"
                    })
                })
            ]
        });
    }
);
