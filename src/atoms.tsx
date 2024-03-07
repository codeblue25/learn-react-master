import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const todoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todoArr = get(todoState);
    return [
      todoArr.filter((todo) => todo.category === "TO_DO"),
      todoArr.filter((todo) => todo.category === "DOING"),
      todoArr.filter((todo) => todo.category === "DONE"),
    ];
  },
});
