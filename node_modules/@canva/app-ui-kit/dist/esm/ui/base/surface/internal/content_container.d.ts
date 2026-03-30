import * as React from 'react';
export type ContentContainerComponentProps = {
    onRequestEscape?: () => void
    children?: React.ReactNode
} & ContentContainerProps;
export type ContentContainerProps = {
    ariaLabel?: string
    ariaLabelledBy?: string
    ariaDescribedBy?: string
    autoFocus?: boolean
    role?: 'dialog' | 'alertdialog'
    captureFocus?: boolean
};
export declare function ContentContainer({ ariaLabel, ariaLabelledBy, ariaDescribedBy, captureFocus, autoFocus, role, onRequestEscape, children, ref, className, ...rest }: ContentContainerComponentProps & React.HTMLProps<HTMLDivElement> & React.RefAttributes<HTMLDivElement>): React.ReactNode;
