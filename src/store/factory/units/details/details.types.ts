export type State = {
  data: object | null;
  isLoading: boolean;
};
export type Store = import("effector").Store<State>;
