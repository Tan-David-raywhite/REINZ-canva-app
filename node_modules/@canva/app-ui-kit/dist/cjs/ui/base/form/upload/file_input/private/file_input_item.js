"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FileInputItem", {
    enumerable: true,
    get: function() {
        return FileInputItem;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _box = require('../../../../box/box');
const _button = require('../../../../button/button');
const _icon = require('../../../../icons/cloud_upload/icon');
const _icon1 = require('../../../../icons/trash/icon');
const _layout = require('../../../../layout/layout');
const _truncated = require('../../../../typography/truncated/truncated');
const _file_inputmessages = require("./file_input.messages");
const FileInputItem = (props)=>{
    const { label, onDeleteClick, disabled, tagName = 'div' } = props;
    return (0, _jsxruntime.jsx)(_box.Box, {
        tagName: tagName,
        children: (0, _jsxruntime.jsxs)(_layout.Columns, {
            spacing: "2u",
            alignY: "center",
            children: [
                (0, _jsxruntime.jsx)(_layout.Column, {
                    width: "content",
                    children: (0, _jsxruntime.jsx)(_icon.CloudUploadIcon, {
                        size: "medium",
                        tone: disabled ? 'tertiary' : 'primary'
                    })
                }),
                (0, _jsxruntime.jsx)(_layout.Column, {
                    children: (0, _jsxruntime.jsx)(_truncated.TruncatedText, {
                        tone: disabled ? 'tertiary' : 'primary',
                        lineClamp: 1,
                        children: label
                    })
                }),
                (0, _jsxruntime.jsx)(_layout.Column, {
                    width: "content",
                    children: (0, _jsxruntime.jsx)(_button.Button, {
                        variant: "tertiary",
                        tooltipLabel: _file_inputmessages.FileInputMessages.deleteButtonLabel(),
                        icon: _icon1.TrashIcon,
                        disabled: disabled,
                        onClick: onDeleteClick
                    })
                })
            ]
        })
    });
};
