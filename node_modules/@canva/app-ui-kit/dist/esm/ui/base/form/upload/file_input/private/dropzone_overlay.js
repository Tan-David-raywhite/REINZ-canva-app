import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import { CloudUploadIcon } from '../../../../icons/cloud_upload/icon';
import { FolderIcon } from '../../../../icons/folder/icon';
import { ImageIcon } from '../../../../icons/image/icon';
import { MusicIcon } from '../../../../icons/music/icon';
import { PrintDocumentIcon } from '../../../../icons/print_document/icon';
import { VideoLandscapeIcon } from '../../../../icons/video_landscape/icon';
import { Inline, Rows, Spacer } from '../../../../layout/layout';
import { Text } from '../../../../typography/typography';
import { useDropzoneContext } from './dropzone_context';
import styles from './dropzone_overlay.css';
import { DropzoneOverlayMessages as Messages } from './dropzone_overlay.messages';
export const DropzoneOverlayInternal = React.memo((props)=>{
    const dropzoneContext = useDropzoneContext();
    const { variant = 'surface', isOver, icon: Icon = CloudUploadIcon, title, description, uploadType = 'singleFile', acceptCategories, disabled } = {
        ...dropzoneContext,
        ...props
    };
    const mainText = title ?? getMainText(uploadType);
    return _jsx("div", {
        className: classNames(styles.dropzoneOverlay, {
            [styles.input]: variant === 'input',
            [styles.surface]: variant === 'surface',
            [styles.fileHovering]: isOver,
            [styles.disabled]: disabled
        }),
        "aria-hidden": !isOver || disabled,
        children: _jsxs(Rows, {
            spacing: "0",
            align: "center",
            children: [
                _jsx(Icon, {
                    size: "large",
                    tone: "primary"
                }),
                _jsx(Text, {
                    tone: "primary",
                    size: "large",
                    weight: "bold",
                    tagName: "span",
                    alignment: "center",
                    children: mainText
                }),
                description != null && _jsx(Text, {
                    tone: "secondary",
                    size: "small",
                    tagName: "span",
                    alignment: "center",
                    children: description
                }),
                acceptCategories != null && _jsxs(_Fragment, {
                    children: [
                        _jsx(Spacer, {
                            direction: "vertical",
                            size: "3u"
                        }),
                        _jsx(CategoryList, {
                            acceptCategories: acceptCategories,
                            enableFolders: uploadType === 'filesAndFolders'
                        })
                    ]
                })
            ]
        })
    });
});
const getMainText = (uploadType)=>{
    switch(uploadType){
        case 'singleFile':
            return Messages.mainTextSingleFile();
        case 'multipleFiles':
            return Messages.mainText();
        case 'filesAndFolders':
            return Messages.mainTextFilesAndFolders();
        default:
            return Messages.mainTextSingleFile();
    }
};
const Category = ({ category, icon: Icon, description })=>{
    return _jsxs(Rows, {
        spacing: "0",
        children: [
            _jsxs(Inline, {
                align: "center",
                alignY: "center",
                spacing: "0.5u",
                children: [
                    Icon && _jsx(Icon, {
                        size: "small",
                        tone: "secondary"
                    }),
                    _jsx(Text, {
                        weight: "bold",
                        tone: "secondary",
                        children: category
                    })
                ]
            }),
            _jsx(Text, {
                size: "small",
                tone: "secondary",
                alignment: "center",
                children: description
            })
        ]
    });
};
const CategoryList = ({ acceptCategories, enableFolders })=>{
    return _jsxs(Rows, {
        spacing: "2u",
        children: [
            acceptCategories['file'] != null && _jsx(Category, {
                category: Messages.files(),
                icon: PrintDocumentIcon,
                description: getCategoryDescription(acceptCategories['file'])
            }),
            acceptCategories['image'] != null && _jsx(Category, {
                category: Messages.images(),
                icon: ImageIcon,
                description: getCategoryDescription(acceptCategories['image'])
            }),
            acceptCategories['video'] != null && _jsx(Category, {
                category: Messages.videos(),
                icon: VideoLandscapeIcon,
                description: getCategoryDescription(acceptCategories['video'])
            }),
            acceptCategories['audio'] != null && _jsx(Category, {
                category: Messages.audio(),
                icon: MusicIcon,
                description: getCategoryDescription(acceptCategories['audio'])
            }),
            enableFolders && _jsx(Category, {
                category: Messages.folders(),
                icon: FolderIcon,
                description: Messages.foldersDescription()
            })
        ]
    });
};
const getCategoryDescription = (fileTypes)=>{
    return fileTypes.map((s)=>s.toUpperCase()).join(Messages.separator());
};
export const DropzoneOverlay = (props)=>{
    return _jsx(DropzoneOverlayInternal, {
        ...props
    });
};
