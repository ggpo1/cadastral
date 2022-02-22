import * as units from "./units";

export const factory = () => {
  const location = units.locationFactory();
  const search = units.searchFactory();

  const result = {
    location: { actions: location.actions, hooks: location.hooks },
    search: { actions: search.actions, hooks: search.hooks },
    details: null,
  };

  return result;
};
