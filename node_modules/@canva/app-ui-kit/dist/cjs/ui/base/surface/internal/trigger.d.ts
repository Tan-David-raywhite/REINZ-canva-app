import type * as React from 'react';
import type { ReferenceObject } from './reference_wrapper';
export type TriggerProps = {
    ariaHasPopup?: 'dialog'
    ariaControls?: string
    disclosure?: true
    pressed?: boolean
    active?: boolean
};
export type Trigger = React.ReactNode | ((triggerProps: TriggerProps) => React.ReactNode) | ReferenceObject;
export declare function resolveTrigger(
 opt: {
     open: boolean
     id: string
     role?: 'dialog' | 'alertdialog'
     trigger?: Trigger
 }
): React.ReactNode | ReferenceObject;
