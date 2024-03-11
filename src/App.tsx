import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="one">
        {() => (
          <ul>
            <Draggable draggableId="first" index={0}>
              {() => <li>Hello</li>}
            </Draggable>
            <Draggable draggableId="second" index={1}>
              {() => <li>World</li>}
            </Draggable>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
