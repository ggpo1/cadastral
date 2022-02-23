import React from "react";
import { useStoreContext } from "store";
import * as consts from "./data.consts";
import * as Markup from "./data.styles";

export const Data = () => {
  const data = useStoreContext()?.details.hooks.useData() as any;
  if (!data) return null;

  return (
    <Markup.Ul>
      {consts.model.map(({ field, label }, index) => {
        if (!data.attrs?.[field]) return null;

        return (
          <Markup.Li key={index}>
            <Markup.Dl>
              <Markup.Dt>{label}</Markup.Dt>
              <Markup.Dd>{data.attrs[field]}</Markup.Dd>
            </Markup.Dl>
          </Markup.Li>
        );
      })}
    </Markup.Ul>
  );
};
