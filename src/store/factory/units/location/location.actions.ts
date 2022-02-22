import { createEvent } from "effector";
import type { State, Store } from "./location.types";

export const actionsFactory = (store: Store) => {
  const update = createEvent<State>();
  store.on(update, (_, payload) => payload);

  const clear = createEvent();
  store.on(clear, () => null);

  return { update, clear };
};
