import * as React from 'react';
/** 
 * The props for the `Tab` component.
 */
export type TabProps = {
    /** 
         * The content of the Tab component.
         */
    children?: React.ReactNode;
    /** 
         * Unique id for the Tab item.
         * This id must match the corresponding `id` in the associated `TabPanel` component.
         * It is used to establish the relationship between the tab and its panel.
         */
    id: string;
    /** 
         * Whether the tab is currently active.
         * When supplied, tab will be in controlled mode.
         */
    active?: boolean;
    /** 
         * Callback to be called when the tab is clicked.
         */
    onClick?: (id: string) => void;
    /** 
         * If the tab button doesn't have a visible text (e.g icon only), set this prop
         * as a short line, only a handful of words, that describe the title of the tab panel.
         *
         * If not set, the string from `tooltipLabel` will be used.
         */
    ariaLabel?: string;
    /** 
         * The html id of the tab panel that will be toggled by this tab.
         * Only populate this prop when tab is in controlled mode.
         * In uncontrolled mode, it's auto-generated.
         */
    ariaControls?: string;
    /** 
         * The text to be shown in the tooltip.
         */
    tooltipLabel?: string;
    /** 
         * A decorator to show at the start of the tab.
         */
    start?: React.ReactNode;
    /** 
         * A decorator to show at the end of the tab.
         */
    end?: React.ReactNode;
    /** 
         * Placement style of the decorators.
         * @defaultValue 'horizontal'
         */
    layout?: 'horizontal' | 'vertical';
};
/** 
 * The individual Tab button item.
 */
export declare function Tab(props: TabProps): React.JSX.Element;
