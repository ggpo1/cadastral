import React from "react";
import { MapView } from "features";
import { Container } from "./app.styles";

export const App = () => {
  return (
    <Container data-cypress="app">
      <MapView />
    </Container>
  );
};
