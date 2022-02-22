import { useStore } from "effector-react";
import type { Store } from "./location.types";

export const hooksFactory = (store: Store) => {
  return {
    useStore: () => useStore(store),
  };
};
