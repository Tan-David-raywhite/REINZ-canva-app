import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
export const DndContext = DragDropContext(HTML5Backend)(({ children })=>children);
