import { atom, selector } from "recoil";

type categories = "TO_DO" | "DOING" | "DONE";

export interface IToDo {
  text: string;
  id: number;
  category: categories;
}

export const categoryState = atom<categories>({
  key: "category",
  default: "TO_DO",
});

export const todoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todoArr = get(todoState);
    const category = get(categoryState);

    return todoArr.filter((todo) => todo.category === category);
  },
});
