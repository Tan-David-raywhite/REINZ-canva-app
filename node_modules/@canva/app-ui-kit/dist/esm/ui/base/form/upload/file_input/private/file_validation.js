import { partition } from '../../../../../../base/partition';
const mimeTypeTokenRegex = /[0-9A-Za-z!#$%&'*+.^_`|~-]+/;
const mimeTypeRegex = new RegExp(`^(${mimeTypeTokenRegex.source})/(${mimeTypeTokenRegex.source})`);
export const getValidatedFiles = (files, multiple, accept)=>{
    if (!multiple) files = files.slice(0, 1);
    if (!accept || accept.length === 0) return {
        acceptedFiles: files,
        rejectedFiles: []
    };
    accept = accept.map((a)=>a.toLowerCase());
    const [acceptedFiles, rejectedFiles] = partition(files, (file)=>{
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
