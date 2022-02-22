import * as units from "./units";
import { connectionsFactory } from "./factory.connections";

export const factory = () => {
  const location = units.locationFactory();
  const search = units.searchFactory();
  const details = units.detailsFactory();

  connectionsFactory({ location, search, details });

  const result = {
    location: { actions: location.actions, hooks: location.hooks },
    search: { actions: search.actions, hooks: search.hooks },
    details: {
      actions: { close: details.actions.close },
      hooks: details.hooks,
    },
  };

  return result;
};
