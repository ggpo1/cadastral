declare global {
  namespace Api {
    export interface Feature {
      type?: number;
      attrs?: {
        adate?: string;
        address?: string;
        application_date?: string;
        area_type?: string;
        area_unit?: string;
        area_value?: number;
        cad_cost?: number;
        cad_unit?: string;
        category_type?: string;
        cc_date_approval?: null;
        cc_date_entering?: string;
        children?: null;
        cn?: string;
        date_cost?: string;
        date_create?: string;
        fp?: null;
        id?: string;
        is_big?: false;
        kvartal?: string;
        kvartal_cn?: string;
        parcel_build?: false;
        parcel_build_attrs?: null;
        parcel_type?: string;
        rifr?: null;
        rifr_cnt?: null;
        rifr_dep?: null;
        rifr_dep_info?: null;
        sale?: null;
        sale_cnt?: null;
        sale_date?: null;
        sale_dep?: null;
        sale_dep_uo?: null;
        sale_doc_date?: null;
        sale_doc_num?: null;
        sale_doc_type?: null;
        sale_price?: null;
        statecd?: string;
        util_by_doc?: string;
        util_code?: string;
      };
      center?: {
        x?: number;
        y?: number;
      };
      extent?: {
        ymax?: number;
        ymin?: number;
        xmax?: number;
        xmin?: number;
      };
    }
  }
}

export {};
