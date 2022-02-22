import React from "react";
import { useStoreContext } from "store";

export const useDetails = () => {
  const storeContext = useStoreContext();
  const details = storeContext?.details.hooks.useData();
  const isLoading = storeContext?.details.hooks.usePending();

  const handleClose = React.useCallback(
    () => storeContext?.details.actions.close(),
    [storeContext]
  );

  return { details, isLoading, handleClose };
};
