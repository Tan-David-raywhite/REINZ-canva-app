import * as React from 'react';
export type LoadingWrapperProps = {
    loading: boolean
    size?: 'medium' | 'small'
    icon?: (props: {
        size?: 'medium' | 'small';
    }) => React.ReactNode
    message?: string
    children?: React.ReactNode
};
export declare function LoadingWrapper({ loading, size, icon, message, children, }: LoadingWrapperProps): React.JSX.Element;
