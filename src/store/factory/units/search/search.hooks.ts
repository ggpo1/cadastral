import { useStoreMap } from "effector-react";
import { Store } from "./search.types";

export const hooksFactory = (store: Store) => {
  return {
    useValue: () => useStoreMap(store, (state) => state.value),
    useAutocomplete: () => useStoreMap(store, (state) => state.autocomplete),
    usePending: () => useStoreMap(store, (state) => state.pending),
  };
};
