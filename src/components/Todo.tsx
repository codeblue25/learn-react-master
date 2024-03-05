import { IToDo } from "../atoms";

function Todo({ text }: IToDo) {
  return <li>{text}</li>;
}

export default Todo;
