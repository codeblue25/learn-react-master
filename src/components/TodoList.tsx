import { useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import { todoSelector } from "../atoms";
import Todo from "./Todo";

function TodoList() {
  const [TO_DO, DOING, DONE] = useRecoilValue(todoSelector);

  return (
    <div>
      <h1>My todos !</h1>
      <hr />
      <CreateTodo />

      <hr />
      <h2>Todo</h2>
      <ul>
        {TO_DO.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>

      <hr />
      <h2>Doing</h2>
      <ul>
        {DOING.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>

      <hr />
      <h2>Done</h2>
      <ul>
        {DONE.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
