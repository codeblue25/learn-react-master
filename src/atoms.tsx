import { atom } from "recoil";

interface ITodoState {
  [key: string]: string[];
}

export const todoState = atom<ITodoState>({
  key: "todo",
  default: {
    "To do": ["hello", "world"],
    Doing: ["this", "is"],
    Done: ["spring"],
  },
});
