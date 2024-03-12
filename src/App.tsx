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
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    /*     setTodoArr((selectedTodoArr) => {
      const tempTodoArr = [...selectedTodoArr];
      // 1) Delete item on the source.index
      tempTodoArr.splice(source.index, 1);
      // 2) Add item on the destination.index
      tempTodoArr.splice(destination?.index, 0, draggableId);

      return tempTodoArr;
    }); */
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
