import './App.css'
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Draggable } from './components/Draggable';
import { Droppable } from './components/Droppable';
import { Listofalex } from './components/Listofalex';
import { Listoflisa } from './components/Listoflisa';

function App() {
  const [parent, setParent] = useState(null);
  const draggable = (
    <Draggable id="draggable" title="Milo">
      Drag me
    </Draggable>
  );

  return (
    <>
      <h1>dragondrop</h1>

      <DndContext onDragEnd={handleDragEnd}>
        {!parent ? draggable : null}
        <Listoflisa id="listoflisa">
          <h1>Lisa</h1>
          {parent === "listoflisa" ? draggable : 'Nothing!'}
        </Listoflisa>
        <Droppable id="droppable">
          <h2>both</h2>
          {parent === "droppable" ? draggable : 'Drop Here'}
        </Droppable>
        <Listofalex id="listofalex">
          <h1>Alex</h1>
          {parent === "listofalex" ? draggable : 'Nada!'}
        </Listofalex>
      </DndContext>
    </>
  );

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
}

export default App
