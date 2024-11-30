import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export function Draggable(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
        title: props.title
    });

    // Within your component that receives `transform` from `useDraggable`:
    const style = {
        transform: CSS.Translate.toString(transform),
    }

    return (
        <button
            className="draggable"
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
        >
            {/* {props.children} */}
            <h2>{props.title}</h2>
        </button>
    );
}