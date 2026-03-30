import * as React from 'react';
type Breakpoint = 'small' | 'medium' | 'large';
type AboveCondition = {
    below?: never;
    above: Breakpoint
};
type BelowCondition = {
    below: Breakpoint
    above?: never;
};
type CombineConditions<T extends readonly any[]> = T extends readonly [infer First, ...infer Rest] ? {
    below: First;
    above: Rest[number];
} | CombineConditions<Rest> : never;
type CombinedCondition = CombineConditions<['small', 'medium', 'large']>;
export type HideProps = {
    children: React.ReactNode
    tagName?: 'div' | 'span'
} & (AboveCondition | BelowCondition | CombinedCondition);
export declare const Hide: ({ children, above, below, tagName: TagName, }: HideProps) => React.JSX.Element;
export {};
