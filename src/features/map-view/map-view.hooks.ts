import React from "react";
import config from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import * as utils from "./map-view.utils";
import * as consts from "./map-view.consts";

config.apiKey = process.env.REACT_APP_MAP_API_KEY;

const layersFactory = () => {
  return [
    utils.cadastralDivisionLayerFactory(),
    utils.buildingOnBigZoomLayerFactory(),
    utils.buildingOnSmallZoomLayerFactory(),
    utils.houseNumbersLayerFactory(),
  ];
};

const mapFactory = (refContainer: React.RefObject<HTMLDivElement>) => {
  if (!refContainer.current) return;

  const map = new Map({
    basemap: "arcgis-light-gray",
    layers: layersFactory(),
  });

  new MapView({
    container: refContainer.current,
    center: consts.CENTER,
    zoom: 13,
    map,
  });

  return map;
};

export const useMapInitialize = () => {
  const refContainer = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    mapFactory(refContainer);
  }, [refContainer]);

  return { refContainer };
};
