import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="one">
        {(magic) => (
          <ul ref={magic.innerRef} {...magic.droppableProps}>
            <Draggable draggableId="first" index={0}>
              {(magic) => (
                <li ref={magic.innerRef} {...magic.draggableProps}>
                  <span {...magic.dragHandleProps}>💞</span>
                  Hello
                </li>
              )}
            </Draggable>
            <Draggable draggableId="second" index={1}>
              {(magic) => (
                <li ref={magic.innerRef} {...magic.draggableProps}>
                  <span {...magic.dragHandleProps}>💞</span>
                  World
                </li>
              )}
            </Draggable>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
