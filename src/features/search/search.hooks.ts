import React from "react";
import { useStoreContext } from "store";

const initialState = "";

enum EAction {
  Change = "change",
  Clean = "clean",
  Apply = "apply",
}

const handleSearchChangeFactory = (dispatch: any) => (value: string) => {
  dispatch({
    type: EAction.Change,
    payload: value,
  });
};

const handleSearchCleanFactory = (dispatch: any) => () => {
  dispatch({
    type: EAction.Clean,
  });
};

const handleSearchApplyFactory = (dispatch: any) => () => {
  dispatch({
    type: EAction.Apply,
  });
};

type ActionSearchChange = {
  type: typeof EAction.Change;
  payload: string;
};

type ActionSearchClean = {
  type: EAction.Clean;
};

type ActionSearchApply = {
  type: EAction.Apply;
};

type Actions = ActionSearchChange | ActionSearchClean | ActionSearchApply;

type Dispatch = React.Dispatch<Actions>;

const reduce =
  (storeContext: IStoreContext) =>
  (state = initialState, action: Actions) => {
    switch (action.type) {
      case EAction.Change:
        return action.payload;
      case EAction.Clean:
        return "";
      case EAction.Apply:
        storeContext?.search.actions.update(state);
        return state;
      default:
        return state;
    }
  };

const actionsFactory = (dispatch: Dispatch) => {
  return {
    handleSearchChange: handleSearchChangeFactory(dispatch),
    handleSearchClean: handleSearchCleanFactory(dispatch),
    handleSearchApply: handleSearchApplyFactory(dispatch),
  };
};

export const useStoreState = () => {
  const storeContext = useStoreContext();

  const [value, dispatch] = React.useReducer(
    reduce(storeContext),
    initialState
  );

  const actions = actionsFactory(dispatch);

  React.useEffect(() => {
    const unsubscribe = storeContext?.location.actions.updatePosition.watch(
      actions.handleSearchClean
    );

    return () => {
      unsubscribe?.();
    };
  }, [storeContext, actions]);

  return { value, actions };
};
