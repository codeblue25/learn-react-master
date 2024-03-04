import { useForm } from "react-hook-form";
import {
  atom,
  // useRecoilValue,
  // useSetRecoilState,
  useRecoilState,
} from "recoil";

interface IForm {
  todo: string;
}

interface ITodo {
  id: number;
  text: string;
  category: "TODO" | "DOING" | "DONE";
}

const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

function TodoList() {
  // const todoArr = useRecoilValue(todoState);
  // const setTodoArr = useSetRecoilState(todoState);
  const [todoArr, setTodoArr] = useRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ todo }: IForm) => {
    setTodoArr((prev) => [
      ...prev,
      { id: Date.now(), text: todo, category: "DONE" },
    ]);
    setValue("todo", "");
  };
  console.log(todoArr);

  return (
    <div>
      <h1>My todos !</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("todo", {
            required: "Please write a todo",
          })}
          type="text"
          placeholder="Write your todo"
        />
        <button>Add</button>
      </form>

      <ul>
        {todoArr.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
