declare function disableDragging(window: Window & typeof globalThis): void
declare const preventDragListener: (e: DragEvent, window: typeof globalThis) => void;
declare let installed: boolean;
