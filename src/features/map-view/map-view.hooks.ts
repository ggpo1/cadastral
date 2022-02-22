import React from "react";
import config from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import * as consts from "./map-view.consts";

config.apiKey = process.env.REACT_APP_MAP_API_KEY;

const layersFactory = () => {
  const vtlLayer = new VectorTileLayer({
    url: process.env.REACT_APP_MAP_CADASTRAL_DIVISION_TILE,
  });

  return [vtlLayer];
};

const mapFactory = (refContainer: React.RefObject<HTMLDivElement>) => {
  if (!refContainer.current) return;

  const layers = layersFactory();

  const map = new Map({
    basemap: "arcgis-light-gray",
    layers,
  });

  // const view =
  new MapView({
    container: refContainer.current,
    center: consts.CENTER,
    zoom: 13,
    map: map,
  });

  console.log("+");

  return map;
};

export const useMapInitialize = () => {
  const refContainer = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    mapFactory(refContainer);
  }, [refContainer]);

  return { refContainer };
};
