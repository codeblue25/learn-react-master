import { useSetRecoilState } from "recoil";
import { IToDo, todoState } from "../atoms";

function Todo({ text, category, id }: IToDo) {
  const setTodoArr = useSetRecoilState(todoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setTodoArr((oldTodoArr) => {
      const targetIndex = oldTodoArr.findIndex((todo) => todo.id === id);
      const oldTodo = oldTodoArr[targetIndex];
      const newTodo = { id, text, category: name as any };
      console.log(oldTodo);
      console.log(newTodo);

      return [
        ...oldTodoArr.slice(0, targetIndex),
        newTodo,
        ...oldTodoArr.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          TO_DO
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          DOING
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
}

export default Todo;
