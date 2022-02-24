import React from "react";
import { useStoreContext } from "store";

const initialState = "";

enum EAction {
  Change = "change",
  Clean = "clean",
  Sync = "sync",
}

type ActionSearchChange = {
  type: typeof EAction.Change;
  payload: string;
};

type ActionSearchClean = {
  type: EAction.Clean;
};

type ActionSearchSync = {
  type: EAction.Sync;
  payload: string;
};

type Actions = ActionSearchChange | ActionSearchClean | ActionSearchSync;

type Dispatch = React.Dispatch<Actions>;

const handleSearchChangeFactory = (dispatch: Dispatch) => (value: string) => {
  dispatch({
    type: EAction.Change,
    payload: value,
  });
};

const handleSearchCleanFactory = (dispatch: Dispatch) => () => {
  dispatch({
    type: EAction.Clean,
  });
};

const handleSearchSyncFactory = (dispatch: Dispatch) => (value: string) => {
  dispatch({
    type: EAction.Sync,
    payload: value,
  });
};

const reduce =
  (storeContext: IStoreContext) =>
  (state = initialState, action: Actions) => {
    switch (action.type) {
      case EAction.Change:
        storeContext?.search.actions.update(action.payload);
        return action.payload;
      case EAction.Clean:
        return "";
      case EAction.Sync:
        return action.payload;
      default:
        return state;
    }
  };

const actionsFactory = (dispatch: Dispatch) => {
  return {
    handleSearchChange: handleSearchChangeFactory(dispatch),
    handleSearchClean: handleSearchCleanFactory(dispatch),
    handleSearchSync: handleSearchSyncFactory(dispatch),
  };
};

export const useStoreState = () => {
  const storeContext = useStoreContext();

  const [value, dispatch] = React.useReducer(
    reduce(storeContext),
    initialState
  );

  const actions = React.useRef(actionsFactory(dispatch));

  React.useEffect(() => {
    const unsubscribeLocationUpdate = storeContext?.location.actions.update.watch(
      actions.current.handleSearchClean
    );

    const unsubscribeSearchSet = storeContext?.search.actions.set.watch(
      actions.current.handleSearchSync
    );

    return () => {
      unsubscribeLocationUpdate?.();
      unsubscribeSearchSet?.();
    };
  }, [storeContext, actions]);

  return { value, actions: actions.current };
};

// -------------------------------------

export const useIsLoading = () => {
  const storeContext = useStoreContext();
  const isLoading = !!storeContext?.search.hooks.usePending();
  return { isLoading };
};
