import { useStore } from "effector-react";
import { Store } from "./details.types";

export const hooksFactory = (store: Store) => {
  return {
    useStore: () => useStore(store),
  };
};
