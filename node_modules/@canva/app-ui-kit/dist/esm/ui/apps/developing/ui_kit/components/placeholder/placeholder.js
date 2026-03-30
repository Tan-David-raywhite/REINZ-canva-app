import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Placeholder as EaselPlaceholder } from '../../../../../base/placeholder/placeholder';
/** 
 * A shape for visualizing content as it's loading.
 */ export function Placeholder(props) {
    return _jsx(EaselPlaceholder, {
        shape: props.shape
    });
}
