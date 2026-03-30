import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useIsHoveringInput } from '../../../../a11y/pointer_input_state/pointer_input_state';
import { Button } from '../../../../button/button';
import { CloudUploadIcon } from '../../../../icons/cloud_upload/icon';
import { Rows } from '../../../../layout/layout';
import { PixelDensityResponsiveImage } from '../../../../responsive_image/responsive_image';
import { InheritColor, Text } from '../../../../typography/typography';
import styles from './file_input.css';
import { FileInputMessages as Messages } from './file_input.messages';
import { getUploadIllustrations } from './file_input_illustration';
export const FileInputInternal = observer(({ mode = 'droparea', variant = 'compact', image: imageProp = 'none', multiple, accept, disabled, error, ariaControls, onClick: onClickProp, id, ariaLabelledBy, ariaDescribedBy, stretchButton })=>{
    const onClick = React.useCallback((e)=>{
        if (!disabled) {
            e.stopPropagation();
            onClickProp();
        }
    }, [
        disabled,
        onClickProp
    ]);
    const uploadButton = _jsx(Button, {
        variant: "secondary",
        icon: CloudUploadIcon,
        onClick: onClick,
        disabled: disabled,
        ariaControls: ariaControls,
        id: id,
        ariaLabelledBy: ariaLabelledBy,
        ariaDescribedBy: ariaDescribedBy,
        stretch: stretchButton && mode === 'button',
        children: multiple ? Messages.fileSelectorButtonText() : Messages.fileSelectorButtonTextSingleFile()
    });
    const hoverSupported = useIsHoveringInput();
    if (mode === 'button') return uploadButton;
    const image = imageProp !== 'none' ? imageProp : variant === 'display' ? 'filetype' : 'none';
    return (_jsx("div", {
            className: classNames(styles.dropArea, {
                [styles.error]: error,
                [styles.disabled]: disabled,
                [styles.hoverSupported]: !disabled && hoverSupported
            }),
            onClick: onClick,
            children: _jsxs(Rows, {
                spacing: "1u",
                align: "center",
                children: [
                    image !== 'none' && _jsx(PixelDensityResponsiveImage, {
                        sources: image === 'filetype' ? getUploadIllustrations(accept) : image,
                        alt: "",
                        className: styles.illustration,
                        draggable: false
                    }),
                    _jsx("span", {
                        className: styles.subText,
                        children: _jsx(Text, {
                            tone: InheritColor,
                            size: "small",
                            tagName: "span",
                            alignment: "center",
                            children: multiple ? Messages.dropAreaText() : Messages.dropAreaTextSingleFile()
                        })
                    }),
                    uploadButton
                ]
            })
        }));
});
