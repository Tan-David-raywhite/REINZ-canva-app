import * as React from 'react';
/** 
 * The props for the `HtmlPreview` component.
 */
export type HtmlPreviewProps = {
    /** 
         * HTML content to render in a sandboxed iframe.
         * Scripts and inline event handlers are automatically stripped for security.
         * @example "<html><body><h1>Hello, world!</h1></body></html>"
         */
    html: string;
};
/** 
 * Renders HTML content in a sandboxed iframe.
 * Canva Design Guidelines only recommend using this component in the previewUi of content publisher apps.
 * Scripts and inline event handlers are automatically stripped for security.
 * The iframe fills its container — wrap it in a sized element to control dimensions.
 * The HTML document scrolls natively within the iframe.
 */
export declare function HtmlPreview({ html }: HtmlPreviewProps): React.JSX.Element;
