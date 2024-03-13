import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface ITodoState {
  [key: string]: ITodo[];
}

export const todoState = atom<ITodoState>({
  key: "todo",
  default: {
    "To do": [
      { id: 1, text: "hello1" },
      { id: 2, text: "hello2" },
    ],
    Doing: [],
    Done: [],
  },
});
