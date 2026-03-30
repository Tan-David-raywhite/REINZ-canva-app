import * as React from 'react';
export type ReferenceWrapperProps = {
    ref?: React.Ref<HTMLDivElement>
    content?: React.ReactNode | ReferenceObject
};
export declare function ReferenceWrapper({ ref, content }: ReferenceWrapperProps): React.ReactNode;
export type ReferenceObject = {
    getBoundingClientRect(): DOMRect;
};
export declare function isReferenceObject(reference: React.ReactNode | ReferenceObject): reference is ReferenceObject;
