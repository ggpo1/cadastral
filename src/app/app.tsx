import React from "react";
import { MapView, Search, DetailsCard } from "features";
import * as Markup from "./app.styles";

export const App = () => {
  return (
    <Markup.Container data-cypress="app">
      <MapView />
      <DetailsCard />
      <Markup.Search>
        <Search />
      </Markup.Search>
    </Markup.Container>
  );
};
