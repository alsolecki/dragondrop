import './App.css'
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Draggable } from './components/Draggable';
import { Listofalex } from './components/Listofalex';
import { Listoflisa } from './components/Listoflisa';
import { Listoflimbo } from './components/Listoflimbo';

function App() {
  const [parent, setParent] = useState(null);

  const draggable = (
    <Draggable id="draggable" title="Milo" color="blue"> </Draggable>
  );

  return (
    <>
      <h1>dragondrop</h1>

      <div className="columncontainer">
        <DndContext onDragEnd={handleDragEnd} >
          <Listoflisa id="listoflisa">
            <h1>Lisa</h1>
            {parent === "listoflisa" ? draggable : 'Nothing!'}
          </Listoflisa>
          {!parent ? draggable : null}
          <Listoflimbo id="droppable">
            {parent === "droppable" ? draggable : 'Drop Here'}
          </Listoflimbo>
          <Listofalex id="listofalex">
            <h1>Alex</h1>
            {parent === "listofalex" ? draggable : 'Nada!'}
          </Listofalex>
        </DndContext>
      </div>
    </>
  );

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }

}

export default App