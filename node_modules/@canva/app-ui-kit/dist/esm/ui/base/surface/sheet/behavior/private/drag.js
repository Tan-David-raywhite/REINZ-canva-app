import * as React from 'react';
import { GestureRecognizer, PanRecognizer } from '../../../../gestures/gesture_recognizer';
export function useDrag({ resizeControls }) {
    const [recognizer] = React.useState(()=>{
        return new GestureRecognizer([
            new PanRecognizer({
                minDistance: 0,
                direction: 'vertical',
                onStart: resizeControls.start,
                onMove: (event)=>resizeControls.update(-event.distanceY),
                onEnd: resizeControls.end
            })
        ]);
    });
    return {
        dragRef: recognizer.setRef
    };
}
