import { sample, guard } from "effector";

type Units = {
  location: ReturnType<typeof import("./units").locationFactory>;
  search: ReturnType<typeof import("./units").searchFactory>;
};

export const connectionsFactory = (units: Units) => {
  const { search, location } = units;

  sample({
    clock: guard({
      source: search.store,
      filter: (source) => !!source,
    }),
    target: location.actions.clearPosition,
  });

  sample({
    clock: guard({
      source: location.store,
      filter: (source) => !!source,
    }),
    target: search.actions.clear,
  });
};
