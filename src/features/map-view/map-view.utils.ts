import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";

const CADASTRAL_DIVISION_ID = "CADASTRAL_DIVISION_ID";
export const cadastralDivisionLayerFactory = () => {
  return new VectorTileLayer({
    id: CADASTRAL_DIVISION_ID,
    url: process.env.REACT_APP_MAP_CADASTRAL_DIVISION_TILE,
  });
};

const BUILDING_BIG_ID = "BUILDING_BIG_ID";
export const buildingOnBigZoomLayerFactory = () => {
  return new WebTileLayer({
    id: BUILDING_BIG_ID,
    urlTemplate: process.env.REACT_APP_MAP_BUILDING_BIG_TILE,
  });
};

const BUILDING_SMALL_ID = "BUILDING_SMALL_ID";
export const buildingOnSmallZoomLayerFactory = () => {
  return new MapImageLayer({
    id: BUILDING_SMALL_ID,
    url: process.env.REACT_APP_MAP_BUILDING_SMALL_TILE,
  });
};

const HOUSE_NUMBERS_ID = "HOUSE_NUMBERS_ID";
export const houseNumbersLayerFactory = () => {
  return new VectorTileLayer({
    id: HOUSE_NUMBERS_ID,
    url: process.env.REACT_APP_MAP_HOUSE_NUMBERS_TILE,
  });
};
