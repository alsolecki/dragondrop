import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Listoflisa(props) {
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
        title: props.title
    });
    const style = {
        opacity: isOver ? 1 : 0.85,
    };

    return (
        <div className="listoflisa" ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}