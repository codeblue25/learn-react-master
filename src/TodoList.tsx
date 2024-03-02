import { useForm } from "react-hook-form";

interface IForm {
  password: string;
  passwordConfirm: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({});
  const onValid = (data: IForm) => {
    if (data.password !== data.passwordConfirm) {
      setError(
        "passwordConfirm",
        { message: "Password is not the same" },
        { shouldFocus: true }
      );
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password should be longer",
            },
          })}
          type="text"
          placeholder="Write your password"
        />
        <span>{errors?.password?.message}</span>

        <input
          {...register("passwordConfirm", {
            required: "Password confirm is required",
          })}
          placeholder="Write your password confirm"
        />
        <span>{errors?.passwordConfirm?.message}</span>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default ToDoList;
