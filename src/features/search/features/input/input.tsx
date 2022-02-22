import React from "react";
import { useHandleChange } from "./input.hooks";
import * as Markup from "./input.styles";
import type { Props } from "./input.types";

export const Input = (props: Props) => {
  const { handleChange } = useHandleChange(props);
  
  return (
    <Markup.Input
      value={props.value}
      placeholder={props.placeholder}
      onChange={handleChange}
    />
  );
};
