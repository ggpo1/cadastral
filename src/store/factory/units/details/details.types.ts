export type State = {
  data: Api.Feature | null;
  isLoading: boolean;
};
export type Store = import("effector").Store<State>;
