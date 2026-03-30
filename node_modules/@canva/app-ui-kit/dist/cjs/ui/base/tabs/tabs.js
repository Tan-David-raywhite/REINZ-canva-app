"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get Tab () {
        return _tab.Tab;
    },
    get TabList () {
        return _tab_list.TabList;
    },
    get TabPanel () {
        return _tab_panel.TabPanel;
    },
    get TabPanels () {
        return _tab_panels.TabPanels;
    },
    get Tabs () {
        return _tabs.Tabs;
    },
    get TabsContext () {
        return _behavior.TabsContext;
    },
    get TabsElementsProvider () {
        return _behavior.TabsElementsProvider;
    },
    get TabsProvider () {
        return _tabs.TabsProvider;
    },
    get useRegisterTabsElements () {
        return _behavior.useRegisterTabsElements;
    },
    get useTab () {
        return _behavior.useTab;
    },
    get useTabList () {
        return _behavior.useTabList;
    },
    get useTabPanel () {
        return _behavior.useTabPanel;
    },
    get useTabs () {
        return _behavior.useTabs;
    },
    get useTabsContext () {
        return _behavior.useTabsContext;
    },
    get useTabsElements () {
        return _behavior.useTabsElements;
    }
});
const _tabs = require("./private/tabs");
const _tab = require("./private/tab");
const _tab_list = require("./private/tab_list");
const _tab_panel = require("./private/tab_panel");
const _tab_panels = require("./private/tab_panels");
const _behavior = require("./private/behavior");
