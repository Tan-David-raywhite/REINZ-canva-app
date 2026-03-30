function disableDragging(window1) {
    window1.addEventListener('dragstart', (e)=>{
        preventDragListener(e, window1);
    }, true);
}
const preventDragListener = (e, window1)=>{
    if (e.target != null && (e.target instanceof window1.HTMLElement && e.target.draggable === false || e.target instanceof window1.SVGElement)) {
        e.preventDefault();
        e.stopPropagation();
    }
};
let installed = false;
if (!installed && typeof window !== 'undefined') {
    disableDragging(window);
    installed = true;
}
