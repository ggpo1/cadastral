import React from "react";
import { useMapInitialize } from "./map-view.hooks";
import "@arcgis/core/assets/esri/themes/light/main.css";
import "./map-view.css";

const style = { width: "100%", height: "100%", margin: 0, padding: 0 };

export const MapView = () => {
  const { refContainer } = useMapInitialize();
  return <div style={style} data-cypress="map-view" ref={refContainer} />;
};
