import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
    setTodoError("");
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length < 10) {
      return setTodoError("Todo should be longer");
    }
    console.log("submit !");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your todo"
          value={todo}
          onChange={onChange}
        />
        <button>Add</button>
        {todoError !== "" ? todoError : null}
      </form>
    </div>
  );
}

export default TodoList;
