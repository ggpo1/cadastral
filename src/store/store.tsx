import React from "react";
import {factory} from "./factory"
import { StoreContext } from "./store.consts";

export const Store: React.FC<{}> = ({ children }) => {
  const valueContext = React.useRef(factory());

  return (
    <StoreContext.Provider value={valueContext.current}>
      {children}
    </StoreContext.Provider>
  );
};
