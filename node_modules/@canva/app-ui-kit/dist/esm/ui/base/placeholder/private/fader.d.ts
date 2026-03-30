import * as React from 'react';
type PropsBase = {
    expand?: boolean
    expandFlex?: boolean
    animate?: boolean
    animationMode?: 'slow' | 'fast'
    placeholder: React.ReactNode
};
type Props = (PropsBase & {
    loading: true
    content?: React.ReactNode
}) | (PropsBase & {
    loading: false
    content: React.ReactNode
});
export declare const PlaceholderFader: (props: Props) => React.JSX.Element;
export {};
