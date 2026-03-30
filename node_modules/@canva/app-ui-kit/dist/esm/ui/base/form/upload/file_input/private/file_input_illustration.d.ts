import type { PixelDensitySource } from '../../../../responsive_image/responsive_image';
export type FileCategory = 'file' | 'image' | 'video' | 'audio';
export type UploadCategory = FileCategory | 'multiple';
export declare const getUploadCategory: (mimeTypes?: string[]) => UploadCategory;
export declare const getUploadIllustrations: (mimeTypes?: string[]) => PixelDensitySource[];
