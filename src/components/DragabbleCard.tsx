import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ $isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) =>
    props.$isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.$isDragging ? "0px 2px 5px rgba(0,0,0,0.5)" : "none"};
`;

interface IDragabbleCardProps {
  todoId: number;
  todoText: string;
  index: number;
}

function DragabbleCard({ todoId, todoText, index }: IDragabbleCardProps) {
  // console.log(todo, "has been rendered");
  return (
    <Draggable draggableId={todoId + ""} index={index} key={todoId + ""}>
      {(magic, snapshot) => (
        <Card
          $isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {todoText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
