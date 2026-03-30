import * as React from 'react';
export type ExpandClickTargetProps = {
    children?: (props: {
        className: string;
    }) => React.ReactNode
};
export declare function ExpandClickTarget({ children }: ExpandClickTargetProps): React.ReactNode;
