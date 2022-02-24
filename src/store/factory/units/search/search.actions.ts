import { createEvent, createEffect } from "effector";
import { api } from "api";
import { shared } from "shared";
import type { Store, State } from "./search.types";

export const actionsFactory = (store: Store) => {
  const update = createEvent<State["value"]>();
  store.on(update, (_, payload) => {
    //shared.globalValues.abortController.abort();
    return { value: payload, autocomplete: [], pending: false };
  });

  const set = createEvent<State["value"]>();
  store.on(set, (_, payload) => {
    //shared.globalValues.abortController.abort();
    return { value: payload, autocomplete: [], pending: false };
  });

  const clear = createEvent();
  store.on(clear, () => {
    // shared.globalValues.abortController.abort();
    return { value: "", autocomplete: [], pending: false };
  });

  const loadAutocompleteByValue = createEffect(
    async (value: State["value"]) => {
      if (!value) return Promise.resolve([]);

      return (
        (
          await api.autocompleteSearchText(
            value,
            shared.globalValues.abortController
          )
        )?.results ?? []
      );
    }
  );

  store.on(loadAutocompleteByValue.doneData, (state, payload) => ({
    ...state,
    autocomplete: payload,
  }));
  store.on(loadAutocompleteByValue.failData, (state) => ({
    ...state,
    autocomplete: [],
  }));
  store.on(loadAutocompleteByValue.pending, (state, payload) => ({
    ...state,
    pending: payload,
  }));

  return {
    set,
    update,
    clear,
    loadAutocompleteByValue,
  };
};
