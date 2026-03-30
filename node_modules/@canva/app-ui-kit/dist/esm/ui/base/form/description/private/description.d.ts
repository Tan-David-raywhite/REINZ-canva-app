import * as React from 'react';
export type DescriptionProps = {
    id: string
    tone?: DescriptionTone
    children?: React.ReactNode
};
export type DescriptionTone = 'neutral' | 'positive' | 'info' | 'warn' | 'critical';
export declare const Description: ({ tone, children, id, }: DescriptionProps) => React.JSX.Element | null;
