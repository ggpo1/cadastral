declare global {
  namespace Api.DetailsByIdAndType {
    export interface Args {
      type: number;
      id: string;
    }

    export interface Response {
      feature: Api.Feature;
    }
  }
}

export {};
