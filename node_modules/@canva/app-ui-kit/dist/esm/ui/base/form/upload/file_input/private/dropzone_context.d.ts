import * as React from 'react';
import type { FileDropProps } from './dropzone';
export type DropzoneContextType = (FileDropProps & {
    isOver: boolean
    isDragging: boolean
}) | null;
export declare const DropzoneContext: React.Context<DropzoneContextType>;
export declare function useDropzoneContext(): DropzoneContextType;
