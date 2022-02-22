import { createEvent } from "effector";
import type { Store, State } from "./search.types";

// autocomplete
// https://pkk.rosreestr.ru/api/typeahead/1?text=77%3A01%3A0001075%3A&_=1645555595523

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
