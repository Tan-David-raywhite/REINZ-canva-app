import * as React from 'react';
export type CharacterCountDecoratorProps = {
    /** 
         * Maximum allowed number of characters.
         */
    max: number;
};
/** 
 * A form input field decorator to show the current and maximum character count accepted.
 *
 * Note that this decorator won't limit the user's ability to type beyond the max, instead the text
 * will turn red once the maximum limit is exceeded.
 */
export declare function CharacterCountDecorator(props: CharacterCountDecoratorProps): React.JSX.Element;
