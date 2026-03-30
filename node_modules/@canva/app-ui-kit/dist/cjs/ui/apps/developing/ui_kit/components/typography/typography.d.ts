import * as React from 'react';
export type TypographyTone = 'primary' | 'secondary' | 'tertiary' | 'critical';
export type TypographySize = 'large' | 'medium' | 'small' | 'xsmall';
export type TitleTagName = keyof Pick<React.JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
export type TextTagName = keyof Pick<React.JSX.IntrinsicElements, 'p' | 'div' | 'span'>;
export type TextSizeAndVariantProps = {
    size?: TypographySize;
    variant?: 'regular';
} | {
    size?: Extract<TypographySize, 'large' | 'medium' | 'small'>;
    variant: 'bold';
};
export type TextProps = {
    /** 
         * The alignment of the text.
         * @defaultValue "start"
         */
    alignment?: 'center' | 'end' | 'inherit' | 'start';
    /** 
         * The capitalization of the text.
         * @defaultValue "default"
         */
    capitalization?: 'default' | 'uppercase';
    /** 
         * The text itself.
         */
    children?: React.ReactNode;
    /** 
         * The maximum number of lines to render.
         * Any additional lines are truncated with an ellipsis.
         */
    lineClamp?: number;
    /** 
         * The size of the text.
         * @defaultValue "medium"
         */
    size?: TypographySize;
    /** 
         * The tag name of the underlying element.
         * There's a restricted set of tag names that can be set.
         * @defaultValue "p"
         */
    tagName?: TextTagName;
    /** 
         * The appearance of the text.
         * @defaultValue "primary"
         */
    tone?: TypographyTone;
    /** 
         * The weight of the font.
         * This can't be set to `"bold"` if the `size` prop is set to `"xsmall"` or `"xlarge"`.
         * @defaultValue "regular"
         */
    variant?: 'regular' | 'bold';
} & TextSizeAndVariantProps;
/** 
 * Renders body text.
 */
export declare function Text(props: TextProps): React.JSX.Element;
export type TitleProps = Omit<TextProps, 'variant' | 'size' | 'tagName'> & {
    /** 
         * The tag name of the underlying element.
         * There's a restricted set of tag names that can be set.
         * By default, `tagName` is set according to the `size` prop.
         */
    tagName?: TitleTagName;
    /** 
         * The size of the title.
         * @defaultValue "medium"
         */
    size?: TypographySize;
};
/** 
 * Renders heading text.
 */
export declare function Title(props: TitleProps): React.JSX.Element;
