declare global {
  namespace Api.SearchByCoordinates {
    export interface Args {
      latitude: number;
      longitude: number;
    }

    export interface Response {
      features: Api.Feature[];
      total: number;
    }
  }
}

export {};
