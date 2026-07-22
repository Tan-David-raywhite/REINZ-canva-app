import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { LegacySearchInputMenu as EaselSearchInputMenu } from '../../../../../../base/form/legacy_search_input_menu/legacy_search_input_menu';
/** 
 * A search input component with an associated menu.
 */ export const SearchInputMenu = ({ ref, ...props })=>{
    return _jsx("div", {
        ref: ref,
        children: _jsx(EaselSearchInputMenu, {
            border: "solid",
            captureFocus: false,
            inputMode: "search",
            type: "search",
            role: "searchbox",
            focusOnClear: true,
            ...props
        })
    });
};
