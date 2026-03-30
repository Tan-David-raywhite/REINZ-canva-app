import * as React from 'react';
export type ClearDecoratorProps = {
    /** 
         * A callback that runs when the clear button is clicked.
         *
         * @remarks
         * The `onClear` method is optional. The component's decorator will automatically clear the input field even without this callback.
         * However, this callback is useful for performing additional side effects when the input is cleared.
         */
    onClear?: () => void;
};
/** 
 * An input field decorator to render a button that clears the input.
 *
 * Note that the clear button is only rendered when the input field is non-empty.
 */
export declare function ClearDecorator(props: ClearDecoratorProps): React.JSX.Element;
