import { useStore } from "effector-react";
import { Store } from "./search.types";

export const hooksFactory = (store: Store) => {
  return {
    useStore: () => useStore(store),
  };
};
