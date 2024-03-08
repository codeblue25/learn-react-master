import { useSetRecoilState } from "recoil";
import { Categories, IToDo, todoState } from "../atoms";

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
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          Todo
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          In Progress
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Complete
        </button>
      )}
    </li>
  );
}

export default Todo;
