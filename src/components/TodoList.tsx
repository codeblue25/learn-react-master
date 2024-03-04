import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
}

function TodoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log("Add todo", data.todo);
    setValue("todo", "");
  };

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
    </div>
  );
}

export default TodoList;
