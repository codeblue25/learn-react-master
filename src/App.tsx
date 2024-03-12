import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "./atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 920px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [todoArr, setTodoArr] = useRecoilState(todoState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;

    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // Move in same board
      setTodoArr((allBoards) => {
        const tempBoard = [...allBoards[source.droppableId]];
        tempBoard.splice(source.index, 1);
        tempBoard.splice(destination?.index, 0, draggableId);

        return {
          ...allBoards,
          [source.droppableId]: tempBoard,
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      // Move to other board
      setTodoArr((allBoards) => {
        const tempSourceBoard = [...allBoards[source.droppableId]];
        const tempDestinationBoard = [...allBoards[destination.droppableId]];
        tempSourceBoard.splice(source.index, 1);
        tempDestinationBoard.splice(destination?.index, 0, draggableId);

        return {
          ...allBoards,
          [source.droppableId]: tempSourceBoard,
          [destination.droppableId]: tempDestinationBoard,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(todoArr).map((boardId) => (
            <Board key={boardId} boardId={boardId} todoArr={todoArr[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
