import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Tabs as EaselTabs } from '../../../../../base/tabs/tabs';
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
 */ export function Tabs(props) {
    return _jsx(EaselTabs, {
        ...props
    });
}
