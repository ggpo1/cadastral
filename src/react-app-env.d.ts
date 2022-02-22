/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";

    /** Ключ от карты */
    REACT_APP_MAP_API_KEY: string;

    /** Координаты центра по умолчанию */
    REACT_APP_MAP_CENTER: string;

    /** Ссылка на таил округов */
    REACT_APP_MAP_CADASTRAL_DIVISION_TILE: string;

    /** Ссылка на таил зданий на большом zoom */
    REACT_APP_MAP_BUILDING_BIG_TILE: string;

    /** Ссылка на таил зданий на маленьком zoom */
    REACT_APP_MAP_BUILDING_SMALL_TILE: string;

    /** Ссылка на таил c номерами домов */
    REACT_APP_MAP_HOUSE_NUMBERS_TILE: string;
  }
}
