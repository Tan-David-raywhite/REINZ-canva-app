import * as React from 'react';
/** 
 * The props for the `Tabs` component.
 */
export type TabsProps = {
    /** 
         * The content of the Tabs component.
         */
    children?: React.ReactNode;
    /** 
         * Id of the currently selected tab.
         * When supplied, tab will be in controlled mode.
         */
    activeId?: string;
    /** 
         * Id of the initially selected tab in uncontrolled mode.
         * @defaultValue The first tab in the TabList.
         */
    defaultActiveId?: string;
    /** 
         * This event handler is called every time a tab is about to change.
         * It will be called with the `activeId` that it will be changed to,
         * along with `prevId`.
         */
    onSelect?: (activeId: string, prevActiveId: string) => void;
    /** 
         * Adjusts the overall tabs height.
         * Set to a number value for a fixed pixel-based height.
         * `auto` will automatically adjusts the height based on content.
         * `fill` will fill the available vertical space based on the container.
         * @defaultValue 'auto'
         */
    height?: 'auto' | 'fill' | number;
};
/** 
 * Tabs organizes content into groups and show one at a time. Users can switch
 * between individual tabs to focus on the content without changing their overall context.
 * @example
 * ```tsx
 * <Tabs defaultActiveId="1">
 *   <TabList align="stretch">
 *     <Tab id="1">First Tab</Tab>
 *     <Tab id="2">Second Tab</Tab>
 *     <Tab id="3">Third Tab</Tab>
 *   </TabList>
 *   <TabPanels>
 *     <TabPanel id="1">One</TabPanel>
 *     <TabPanel id="2">Two</TabPanel>
 *     <TabPanel id="3">Three</TabPanel>
 *   </TabPanels>
 * </Tabs>
 * ```
 */
export declare function Tabs(props: TabsProps): React.JSX.Element;
