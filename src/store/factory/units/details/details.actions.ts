import { createEvent, createEffect } from "effector";
import type { Store } from "./details.types";

let debugPromise: NodeJS.Timeout;

// details by position
// https://pkk.rosreestr.ru/api/features/1?_=1645555772355&text=55.769342+37.597441&limit=40&skip=0&inPoint=true&tolerance=1

const loadByPositionFactory = () => {
  return createEffect((args: any): Promise<object> => {
    console.log("loadByPositionFactory::args", args);
    if (debugPromise) clearTimeout(debugPromise);

    return new Promise((resolve) => {
      debugPromise = setTimeout(() => {
        resolve({
          date: Date.now(),
        });
      }, 1000);
    });
  });
};

// details by search
// https://pkk.rosreestr.ru/api/features/1/77:1:1075:4?date_format=%c&_=1645555648163

const loadBySearchFactory = () => {
  return createEffect((search: string): Promise<object> => {
    console.log("search", search);
    if (debugPromise) clearTimeout(debugPromise);

    return new Promise((resolve) => {
      debugPromise = setTimeout(() => {
        resolve({
          date: Date.now(),
        });
      }, 1000);
    });
  });
};

export const actionsFactory = (store: Store) => {
  const loadByPosition = loadByPositionFactory();
  store.on(loadByPosition.failData, () => ({
    data: null,
    isLoading: false,
  }));
  store.on(loadByPosition.doneData, (_, payload) => ({
    data: payload,
    isLoading: false,
  }));
  store.on(loadByPosition.pending, (state, payload) => ({
    data: state?.data ?? null,
    isLoading: payload,
  }));

  const loadBySearch = loadBySearchFactory();
  store.on(loadBySearch.failData, () => ({
    data: null,
    isLoading: false,
  }));
  store.on(loadBySearch.doneData, (_, payload) => ({
    data: payload,
    isLoading: false,
  }));
  store.on(loadBySearch.pending, (state, payload) => ({
    data: state.data,
    isLoading: payload,
  }));

  const close = createEvent();
  store.on(close, () => {
    if (debugPromise) clearTimeout(debugPromise);

    return {
      data: null,
      isLoading: false,
    };
  });

  return {
    loadByPosition,
    loadBySearch,
    close,
  };
};
