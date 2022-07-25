import { nanoid } from "nanoid";

export const states = {
  pending: "pending",
  done: "done",
  all: "all",
};

export function createTodo(title) {
  return {
    id: nanoid(),
    title,
    state: states.pending,
    checked: false
  };
}