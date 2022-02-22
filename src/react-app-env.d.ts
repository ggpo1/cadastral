/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";

    /** Ключ от карты */
    REACT_APP_MAP_API_KEY: string;

    /** Координаты центра по умолчанию */
    REACT_APP_MAP_CENTER: string;

    /** Ссылка на таил */
    REACT_APP_MAP_CADASTRAL_DIVISION_TILE: string;
  }
}
