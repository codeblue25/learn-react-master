import { useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import { todoState } from "../atoms";
import Todo from "./Todo";

function TodoList() {
  const todoArr = useRecoilValue(todoState);

  return (
    <div>
      <h1>My todos !</h1>
      <hr />
      <CreateTodo />
      <ul>
        {todoArr.map((todo) => (
          // <Todo key={todo.id} text={todo.text} category={todo.category} id={todo.id}>
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
