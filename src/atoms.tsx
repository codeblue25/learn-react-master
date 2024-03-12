import { atom, selector } from "recoil";

export const todoState = atom({
  key: "todo",
  default: ["hello", "world", "this", "is", "spring"],
});
