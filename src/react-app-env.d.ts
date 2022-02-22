/// <reference types="react-scripts" />

declare type AppEnv = {
    NODE_ENV: string;

    /** Ключ от карты */
    REACT_APP_MAP_API_KEY: string;
    
    /** Координаты центра по умолчанию */
    REACT_APP_MAP_CENTER: [number, number];

    /** Ссылка на таил */
    REACT_APP_MAP_CADASTRAL_DIVISION_TILE: string;
  };
