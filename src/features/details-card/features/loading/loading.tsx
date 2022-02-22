import React from "react";
import { Icons } from "assets";
import * as Markup from "./loading.styles";

export const Loading = () => {
  return (
    <Markup.Container>
      <Icons.Spinner />
    </Markup.Container>
  );
};
