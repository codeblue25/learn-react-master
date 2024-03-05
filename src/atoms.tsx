import { atom } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const todoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
