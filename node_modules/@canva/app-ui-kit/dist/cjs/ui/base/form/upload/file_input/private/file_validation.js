"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getValidatedFiles", {
    enumerable: true,
    get: function() {
        return getValidatedFiles;
    }
});
const _partition = require('../../../../../../base/partition');
const mimeTypeTokenRegex = /[0-9A-Za-z!#$%&'*+.^_`|~-]+/;
const mimeTypeRegex = new RegExp(`^(${mimeTypeTokenRegex.source})/(${mimeTypeTokenRegex.source})`);
const getValidatedFiles = (files, multiple, accept)=>{
    if (!multiple) files = files.slice(0, 1);
    if (!accept || accept.length === 0) return {
        acceptedFiles: files,
        rejectedFiles: []
    };
    accept = accept.map((a)=>a.toLowerCase());
    const [acceptedFiles, rejectedFiles] = (0, _partition.partition)(files, (file)=>{
        const fileExtension = file.name.split('.').pop()?.toLowerCase();
        return accept.some((acceptType)=>fileExtension && acceptType === `.${fileExtension}` || mimeTypeMatches(file.type.toLowerCase(), acceptType));
    });
    return {
        acceptedFiles,
        rejectedFiles
    };
};
const mimeTypeMatches = (fileType, acceptType)=>{
    if (acceptType === '*/*') return true;
    const mimeTypeMatch = fileType.match(mimeTypeRegex);
    const acceptTypeMatch = acceptType.match(mimeTypeRegex);
    if (!mimeTypeMatch || !acceptTypeMatch) return false;
    const [, fileMainType, fileSubType] = mimeTypeMatch;
    const [, acceptMainType, acceptSubType] = acceptTypeMatch;
    return acceptMainType === fileMainType && (acceptSubType === '*' || acceptSubType === fileSubType);
};
