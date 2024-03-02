import { useForm } from "react-hook-form";

interface IForm {
  password: string;
  passwordConfirm: string;
  extraError: string;
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

    setError("extraError", { message: "Server offline" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 2,
              message: "Password should be longer",
            },
            validate: {
              no123: (value) =>
                value.includes("123") ? "123 is not allowed" : true,
              noAbc: (value) =>
                value.includes("abc") ? "'abc' is not allowed" : true,
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

        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
