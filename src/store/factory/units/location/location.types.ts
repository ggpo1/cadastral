export interface State {
  latitude: number; // 55.759082048909335
  longitude: number; // 37.63408038612749
}

export type Store = import("effector").Store<State | null>;
