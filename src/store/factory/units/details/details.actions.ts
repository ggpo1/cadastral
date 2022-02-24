import { createEvent, createEffect } from "effector";
import { api } from "api";
import { shared } from "shared";
import type { Store } from "./details.types";

let debugPromise: NodeJS.Timeout;

const loadByPositionFactory = () => {
  return createEffect(
    async (
      args: { latitude: number; longitude: number } | null
    ): Promise<Api.Feature | null> => {
      //shared.globalValues.abortController.abort();
      shared.globalValues.abortController = new AbortController();

      if (!args) return Promise.resolve(null);

      const latitude = Math.round(args.latitude * 1000000) / 1000000;
      const longitude = Math.round(args.longitude * 1000000) / 1000000;

      const queryData = await api.searchByCoordinates(
        { latitude, longitude },
        shared.globalValues.abortController
      );

      const id = queryData.features?.[0]?.attrs?.id;
      const type = queryData.features?.[0]?.type;
      if (!queryData.total || !id || !type) return null;

      return (
        await api.detailsByIdAndType(
          { type, id },
          shared.globalValues.abortController
        )
      ).feature;
    }
  );
};

const loadBySearchFactory = () => {
  return createEffect(async (search: string): Promise<Api.Feature | null> => {
    const queryData = await api.searchByTitle(
      search,
      shared.globalValues.abortController
    );

    const id = queryData.features?.[0]?.attrs?.id;
    const type = queryData.features?.[0]?.type;
    if (!queryData.total || !id || !type) return null;

    return (
      await api.detailsByIdAndType(
        { type, id },
        shared.globalValues.abortController
      )
    ).feature;
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
    data: state?.data ?? null,
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
