import { useForm } from "react-hook-form";

function TodoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("todo", {
            minLength: {
              value: 10,
              message: "Todo should be longer",
            },
          })}
          type="text"
          placeholder="Write your todo"
        />
        <button>Add</button>
        <span>{errors.todo?.message as string}</span>
      </form>
    </div>
  );
}

export default TodoList;
