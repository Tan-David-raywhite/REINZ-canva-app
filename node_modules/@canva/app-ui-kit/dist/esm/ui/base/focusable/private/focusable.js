import * as React from 'react';
export function useFocusableRef(ref) {
    const innerRef = React.useRef(null);
    React.useImperativeHandle(ref, ()=>({
            focus: (options)=>innerRef.current?.focus(options),
            blur: ()=>innerRef.current?.blur()
        }), []);
    return innerRef;
}
