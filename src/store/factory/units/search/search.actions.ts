import { createEvent } from "effector";
import type { Store, State } from "./search.types";

export const actionsFactory = (store: Store) => {
  const update = createEvent<State>();
  store.on(update, (_, payload) => payload);

  const clear = createEvent();
  store.on(clear, () => "");

  return {
    update,
    clear,
  };
};
