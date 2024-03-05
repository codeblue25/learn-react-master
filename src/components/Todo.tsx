import { IToDo } from "../atoms";

function Todo({ text, category }: IToDo) {
  const onClick = (selectedCategory: IToDo["category"]) => {
    console.log(selectedCategory);
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>DOING</button>
      )}
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>TO_DO</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>DONE</button>
      )}
    </li>
  );
}

export default Todo;
