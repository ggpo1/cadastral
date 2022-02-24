declare global {
    namespace Api.SearchByTitle {
      export type Args = string;
  
      export interface Variant {
        title: string;
        value: string;
      }
  
      export interface Response {
        features: Api.Feature[];
        total: 1
      }
    }
  }
  
  export {};
  