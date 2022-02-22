import React from "react";
import { StoreContext } from "./store.consts";

export const useStoreContext = () => React.useContext(StoreContext);
