export class MouseTracker {
    disconnect() {
        if (this.element instanceof HTMLElement) this.element.removeEventListener('mousedown', this.onMouseDown);
        else this.element.removeEventListener('mousedown', this.onMouseDown);
        this.stop();
    }
    stop() {
        const document = this.element.ownerDocument;
        document.removeEventListener('mousemove', this.onMouseMove, {
            capture: true
        });
        document.removeEventListener('mouseup', this.onMouseUp, {
            capture: true
        });
    }
    constructor(element, onPointerDown, onPointerMove, onPointerUp){
        this.element = element;
        this.onPointerDown = onPointerDown;
        this.onPointerMove = onPointerMove;
        this.onPointerUp = onPointerUp;
        this.type = 'mouse';
        this.onMouseDown = (evt)=>{
            const document = this.element.ownerDocument;
            document.addEventListener('mousemove', this.onMouseMove, {
                capture: true
            });
            document.addEventListener('mouseup', this.onMouseUp, {
                capture: true
            });
            this.onPointerDown(mouseEventToPointer(evt, this.element));
        };
        this.onMouseMove = (evt)=>{
            this.onPointerMove(mouseEventToPointer(evt, this.element));
        };
        this.onMouseUp = (evt)=>{
            this.stop();
            this.onPointerUp(mouseEventToPointer(evt, this.element));
        };
        if (element instanceof HTMLElement) element.addEventListener('mousedown', this.onMouseDown);
        else element.addEventListener('mousedown', this.onMouseDown);
    }
}
function mouseEventToPointer(evt, currentTarget) {
    return {
        timestamp: Date.now(),
        id: 'mouse',
        button: evt.button,
        target: evt.target,
        currentTarget,
        x: evt.clientX,
        y: evt.clientY,
        sourceEvent: evt,
        pointerType: 'mouse'
    };
}
