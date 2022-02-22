import { createEvent, createEffect } from "effector";
import type { Store } from "./details.types";

let debugPromise: NodeJS.Timeout;

const loadByPositionFactory = () => {
  return createEffect((args: any) => {
    console.log("loadByPositionFactory::args", args);
    if (debugPromise) clearTimeout(debugPromise);

    return new Promise((resolve) => {
      debugPromise = setTimeout(() => {
        resolve({});
      }, 1000);
    });
  });
};

const loadBySearchFactory = () => {
  return createEffect((search: string) => {
    console.log("search", search);
    if (debugPromise) clearTimeout(debugPromise);

    return new Promise((resolve) => {
      debugPromise = setTimeout(() => {
        resolve({});
      }, 1000);
    });
  });
};

export const actionsFactory = (store: Store) => {
  const loadByPosition = loadByPositionFactory();
  store.on(loadByPosition.failData, () => null);
  store.on(loadByPosition.doneData, (_, payload) => payload);

  const loadBySearch = loadBySearchFactory();
  store.on(loadBySearch.failData, () => null);
  store.on(loadBySearch.doneData, (_, payload) => payload);

  const close = createEvent();
  store.on(close, () => {
    if (debugPromise) clearTimeout(debugPromise);
    return null;
  });

  return {
    loadByPosition,
    loadBySearch,
    close,
  };
};
