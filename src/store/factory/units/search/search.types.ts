export interface State {
  value: string;
  pending: boolean;
  autocomplete: Api.AutocompleteSearchText.Variant[];
}
export type Store = import("effector").Store<State>;
