import * as React from 'react';
/** 
 * The props for the `TabPanel` component.
 */
export type TabPanelProps = {
    /** 
         * The content of the TabPanel component.
         */
    children?: React.ReactNode;
    /** 
         * Unique id for the tab panel item.
         * This id must match the corresponding `id` in the associated `Tab` component.
         * It is used to establish the relationship between the tab and its panel.
         */
    id: string;
    /** 
         * Whether the tab panel is currently active.
         *
         * When supplied, tab panel will be in controlled mode.
         * When false, the tab panel will be visually hidden.
         */
    active?: boolean;
    /** 
         * The html id of the tab that controls this tab panel.
         * Only populate this prop when tab panel is in controlled mode.
         * In uncontrolled mode, it's auto-generated.
         */
    ariaLabelledBy?: string;
    /** 
         * Enable the sliding tab panel transition animation.
         * This is independent of the TabList animation.
         * @defaultValue true
         */
    animate?: boolean;
};
/** 
 * The individual panel where the main content of the tab is displayed.
 */
export declare function TabPanel(props: TabPanelProps): React.JSX.Element;
