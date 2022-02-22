import { createStore } from "effector";
import { actionsFactory } from "./search.actions";
import { hooksFactory } from "./search.hooks";

export const searchFactory = () => {
  const store = createStore("");
  const actions = actionsFactory(store);
  const hooks = hooksFactory(store);
  return { store, actions, hooks };
};
