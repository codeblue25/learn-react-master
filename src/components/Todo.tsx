import { IToDo } from "../atoms";

function Todo({ text, category }: IToDo) {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log(name);
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          TO_DO
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          DOING
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
}

export default Todo;
