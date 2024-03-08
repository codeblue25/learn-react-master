import { useRecoilState, useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import { Categories, categoryState, todoSelector } from "../atoms";
import Todo from "./Todo";

function TodoList() {
  const todoArr = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>My todos !</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>Todo</option>
        <option value={Categories.DOING}>In Progress</option>
        <option value={Categories.DONE}>Complete</option>
      </select>
      <CreateTodo />

      {todoArr?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
