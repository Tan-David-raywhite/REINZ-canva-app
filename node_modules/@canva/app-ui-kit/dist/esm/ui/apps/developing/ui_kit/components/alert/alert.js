import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Alert as EaselAlert } from '../../../../../base/alert/alert';
/** 
 * Highlights important information that the user needs to see.
 */ export function Alert(props) {
    return _jsx(EaselAlert, {
        children: props.children,
        tone: props.tone,
        size: "small",
        showIcon: true,
        dismissible: props.onDismiss != null,
        onDismiss: ()=>props.onDismiss?.(),
        title: props.title
    });
}
