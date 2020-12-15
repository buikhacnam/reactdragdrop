import React from 'react'

export default function Card({id, className, draggable, children}) {
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData("card_id", target.id);
        // setTimeout(() => {
        //     target.style.display = 'none';
        // }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }
    return (
        <div
        id={id}
        className={className}
        draggable={draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
        >
           {children}
        </div>
    )
}
