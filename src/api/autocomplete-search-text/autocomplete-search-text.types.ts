declare global {
  namespace Api.AutocompleteSearchText {
    export type Args = string;

    export interface Variant {
      title: string;
      value: string;
    }

    export interface Response {
      results: Variant[];
    }
  }
}

export {};
