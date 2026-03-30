import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import 'react';
import { Box } from '../../../../box/box';
import { Button } from '../../../../button/button';
import { CloudUploadIcon } from '../../../../icons/cloud_upload/icon';
import { TrashIcon } from '../../../../icons/trash/icon';
import { Column, Columns } from '../../../../layout/layout';
import { TruncatedText } from '../../../../typography/truncated/truncated';
import { FileInputMessages as Messages } from './file_input.messages';
export const FileInputItem = (props)=>{
    const { label, onDeleteClick, disabled, tagName = 'div' } = props;
    return _jsx(Box, {
        tagName: tagName,
        children: _jsxs(Columns, {
            spacing: "2u",
            alignY: "center",
            children: [
                _jsx(Column, {
                    width: "content",
                    children: _jsx(CloudUploadIcon, {
                        size: "medium",
                        tone: disabled ? 'tertiary' : 'primary'
                    })
                }),
                _jsx(Column, {
                    children: _jsx(TruncatedText, {
                        tone: disabled ? 'tertiary' : 'primary',
                        lineClamp: 1,
                        children: label
                    })
                }),
                _jsx(Column, {
                    width: "content",
                    children: _jsx(Button, {
                        variant: "tertiary",
                        tooltipLabel: Messages.deleteButtonLabel(),
                        icon: TrashIcon,
                        disabled: disabled,
                        onClick: onDeleteClick
                    })
                })
            ]
        })
    });
};
