import * as React from 'react';
import type { MultilineInputProps } from './multiline_input';
export type MultilineInputWithFooterProps = MultilineInputProps & {
    EndContent?: React.ReactNode
    StartContent?: React.ReactNode
};
export declare function MultilineInputWithFooter(props: MultilineInputWithFooterProps): React.ReactNode;
