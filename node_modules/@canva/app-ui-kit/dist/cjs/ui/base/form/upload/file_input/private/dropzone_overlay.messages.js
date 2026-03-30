"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropzoneOverlayMessages = void 0;
const strings_1 = require('../../../../i18n/strings');
exports.DropzoneOverlayMessages = {
    mainText: () => (0, strings_1.getString)("tMZBmQ", "Drop files to upload"),
    mainTextSingleFile: () => (0, strings_1.getString)("UC2lUg", "Drop file to upload"),
    mainTextFilesAndFolders: () => (0, strings_1.getString)("mZBfcA", "Drop content to upload"),
    files: () => (0, strings_1.getString)("qJdDrA", "Files"),
    images: () => (0, strings_1.getString)("hMQrTQ", "Images"),
    videos: () => (0, strings_1.getString)("kZla1Q", "Videos"),
    audio: () => (0, strings_1.getString)("lcAHAA", "Audio"),
    folders: () => (0, strings_1.getString)("3GTUeA", "Folders"),
    foldersDescription: () => (0, strings_1.getString)("gkzBmw", "Folders containing any of the above"),
    separator: () => (0, strings_1.getString)("aJKXUQ", ", "),
};
