import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "./atoms";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  min-height: 200px;
  padding: 30px 10px 20px 10px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.boardColor};
`;

const Card = styled.div`
  padding: 10px;
  margin-bottom: 4px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.cardColor};
`;

function App() {
  const [todoArr, setTodoArr] = useRecoilState(todoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    console.log("from", source);
    console.log("to", destination);

    if (!destination) return;
    setTodoArr((selectedTodoArr) => {
      const tempTodoArr = [...selectedTodoArr];
      // 1) Delete item on the source.index
      tempTodoArr.splice(source.index, 1);
      // 2) Add item on the destination.index
      tempTodoArr.splice(destination?.index, 0, draggableId);

      return tempTodoArr;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {todoArr.map((todo, index) => (
                  <Draggable draggableId={todo} index={index} key={todo}>
                    {(magic) => (
                      <Card
                        ref={magic.innerRef}
                        {...magic.draggableProps}
                        {...magic.dragHandleProps}
                      >
                        {todo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
