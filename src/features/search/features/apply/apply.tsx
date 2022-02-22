import React from "react";
import * as Markup from "./apply.styles";

interface Props {
  text: JSX.Element;
  onClick: () => void;
}

export const Apply = (props: Props) => {
  return <Markup.Button onClick={props.onClick}>{props.text}</Markup.Button>;
};
