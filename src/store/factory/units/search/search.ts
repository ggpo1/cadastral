import { createStore } from "effector";
import * as consts from "./search.consts";
import { actionsFactory } from "./search.actions";
import { hooksFactory } from "./search.hooks";
import type { State } from "./search.types";

export const searchFactory = () => {
  const store = createStore<State>(consts.initialState);
  const actions = actionsFactory(store);
  const hooks = hooksFactory(store);
  actions.update.watch((data) => actions.loadAutocompleteByValue(data));
  return { store, actions, hooks };
};
