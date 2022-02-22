import React from "react";
import config from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { useStoreContext } from "store";
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

const eventListnerFactory = (view: MapView, storeContext: IStoreContext) => {
  view.on("click", (event) => {
    storeContext?.location.actions.updatePosition({
      latitude: event.mapPoint.latitude,
      longitude: event.mapPoint.longitude,
    });
  });
};

const mapFactory = (
  refContainer: React.RefObject<HTMLDivElement>,
  storeContext: IStoreContext
) => {
  if (!refContainer.current) return;

  const map = new Map({
    basemap: "arcgis-light-gray",
    layers: layersFactory(),
  });

  const view = new MapView({
    container: refContainer.current,
    center: consts.CENTER,
    zoom: 13,
    map,
  });

  eventListnerFactory(view, storeContext);

  return map;
};

export const useMapInitialize = () => {
  const storeContext: IStoreContext = useStoreContext();
  const refContainer = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    mapFactory(refContainer, storeContext);
  }, [refContainer, storeContext]);

  return { refContainer };
};
