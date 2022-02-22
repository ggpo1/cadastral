import { useStoreMap } from "effector-react";
import type { Store } from "./details.types";

export const hooksFactory = (store: Store) => {
  return {
    useData: () => useStoreMap(store, (state) => state.data),
    usePending: () => useStoreMap(store, (state) => state.isLoading),
  };
};
