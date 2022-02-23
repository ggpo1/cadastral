import type { State } from "./search.types";

export const initialState: State = {
  value: "",
  autocomplete: [],
  pending: false,
};
