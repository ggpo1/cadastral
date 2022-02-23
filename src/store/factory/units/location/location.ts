import { createStore } from "effector";
import { hooksFactory } from "./location.hooks";
import { actionsFactory } from "./location.actions";
import type { State } from "./location.types";

export const locationFactory = () => {
  const store = createStore<State | null>(null);
  const hooks = hooksFactory(store);
  const actions = actionsFactory(store);

  return { store, hooks, actions };
};
