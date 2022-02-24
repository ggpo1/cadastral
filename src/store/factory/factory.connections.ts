import { sample, guard } from "effector";

type Units = {
  location: ReturnType<typeof import("./units").locationFactory>;
  search: ReturnType<typeof import("./units").searchFactory>;
  details: ReturnType<typeof import("./units").detailsFactory>;
};

export const connectionsFactory = (units: Units) => {
  const { search, location, details } = units;

  sample({
    clock: guard({
      source: search.store,
      filter: (source) => !!source.value,
    }),
    fn: () => undefined,
    target: [location.actions.clear],
  });

  search.actions.set.watch(details.actions.loadBySearch);

  sample({
    clock: guard({
      source: location.store,
      filter: (source) => !!source,
    }),
    fn: (source) => source,
    target: [search.actions.clear, details.actions.loadByPosition],
  });
};
