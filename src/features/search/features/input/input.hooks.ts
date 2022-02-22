import React from "react";
import type { Props } from "./input.types";

export const useHandleChange = (props: Props) => {
  const { onChange } = props;

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      onChange(event.target.value),
    [onChange]
  );

  return { handleChange };
};
