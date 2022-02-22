import { createStore } from "effector";
import { hooksFactory } from "./details.hooks";
import { actionsFactory } from "./details.actions";
import { State } from "./details.types";

export const detailsFactory = () => {
  const store = createStore<State | null>(null);
  const hooks = hooksFactory(store);
  const actions = actionsFactory(store);

  return { store, hooks, actions };
};
