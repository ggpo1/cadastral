import React from "react";
import { MapView, Search } from "features";
import * as Markup from "./app.styles";

export const App = () => {
  return (
    <Markup.Container data-cypress="app">
      <MapView />
      <Markup.Search>
        <Search />
      </Markup.Search>
    </Markup.Container>
  );
};
