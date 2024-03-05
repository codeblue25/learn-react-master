import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { todoState } from "../atoms";

interface IForm {
  todo: string;
}

function CreateTodo() {
  const setTodoArr = useSetRecoilState(todoState);

  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ todo }: IForm) => {
    setTodoArr((prev) => [
      ...prev,
      { id: Date.now(), text: todo, category: "DONE" },
    ]);
    setValue("todo", "");
  };

  return (
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
  );
}

export default CreateTodo;
