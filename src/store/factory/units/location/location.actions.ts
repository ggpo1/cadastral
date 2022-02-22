import { createEvent } from "effector";
import type { State, Store } from "./location.types";

export const actionsFactory = (store: Store) => {
  const updatePosition = createEvent<State>();
  store.on(updatePosition, (_, payload) => payload);

  const clearPosition = createEvent();
  store.on(updatePosition, () => null);

  return {
    updatePosition,
    clearPosition,
  };
};
