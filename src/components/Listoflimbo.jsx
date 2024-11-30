import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Listoflimbo(props) {
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
    });
    const style = {
        opacity: isOver ? 1 : 0.25,
    };

    return (
        <div className="droppable" ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}