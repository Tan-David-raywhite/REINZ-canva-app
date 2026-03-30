import type * as React from 'react';
/** `
 * The props for the `SurfaceHeaderBackButton` component.
 */
type SurfaceHeaderBackButtonProps = {
    /** 
         * Accessibility label for the back button.
         */
    ariaLabel: string;
    /** 
         * Callback function to be called when the back button is clicked.
         */
    onClick: () => void;
};
/** 
 * The props for the `SurfaceHeader` component.
 */
export type SurfaceHeaderProps = {
    /** 
         * Title of the surface header.
         */
    title: string;
    /** 
         * Description of the surface header, appears below the title.
         */
    description?: string;
    /** 
         * Whether to show the bottom divider.
         * @default true
         * @remarks
         * Enable the divider to create additional distinction between the header content and the body content
         */
    divider?: boolean;
    /** 
         * Background color of the surface header.
         * @default 'surface'
         * @remarks
         * The default background color is 'surface', recommended for use when body scroll is present and
         * the header is fixed to the top of the app container. The 'none' background color is used to remove
         * the background color of the surface header to show through to the underlying background color.
         */
    background?: 'surface' | 'none';
    /** 
         * Display a back button on the start side of the surface header.
         */
    start?: SurfaceHeaderBackButtonProps;
    /** 
         * Decorator to display on the end side of the surface header.
         * @remarks
         * Recommended uses of the end decorator are a tertiary icon button
         */
    end?: React.ReactNode;
};
/** 
 * Display a header with a title, description, and start and end decorators such as back and close buttons.
 * @example
 * ```tsx
 * <SurfaceHeader
 *   title="Title"
 *   description="Description"
 *   divider={false}
 *   start={{ ariaLabel: 'Go back', onClick: () => {...} },
 *   end={ <Button variant="tertiary" icon={() => <MoreHorizontalIcon />} /> }
 * />
 * ```
 */
export declare function SurfaceHeader(props: SurfaceHeaderProps): React.JSX.Element;
export {};
