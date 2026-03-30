import * as React from 'react';
export type WordCountDecoratorProps = {
    /** 
         * Maximum allowed number of words.
         */
    max: number;
};
/** 
 * A form input field decorator to show the current and maximum word count accepted.
 *
 * Note that this decorator won't limit the user's ability to type beyond the max, instead the text
 * will turn red once the maximum limit is exceeded.
 */
export declare function WordCountDecorator(props: WordCountDecoratorProps): React.JSX.Element;
