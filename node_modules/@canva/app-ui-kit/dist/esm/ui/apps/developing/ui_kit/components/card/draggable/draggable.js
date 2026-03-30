import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import styles from './draggable.css';
const createDragStart = (cardRef, setDragging, onDragStart, loading)=>{
    return (event)=>{
        if (onDragStart === undefined || loading === true) return;
        if (cardRef.current) {
            const card = cardRef.current.getBoundingClientRect();
            const x = event.clientX - card.x;
            const y = event.clientY - card.y;
            event.dataTransfer.setDragImage(cardRef.current, x, y);
        }
        setTimeout(()=>setDragging(true), 0);
        onDragStart(event);
    };
};
export const Draggable = ({ onDragStart, loading, children })=>{
    const [dragging, setDragging] = React.useState(false);
    const cardRef = React.useRef(null);
    const dragStart = createDragStart(cardRef, setDragging, onDragStart, loading);
    const onDragEnd = ()=>setDragging(false);
    return _jsx("div", {
        ref: cardRef,
        className: classNames({
            [styles.dragging]: dragging
        }),
        children: children({
            onDragStart: dragStart,
            loading,
            onDragEnd
        })
    });
};
