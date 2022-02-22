import React from "react";

import { Input, Apply } from "./features";
import { useStoreState } from "./search.hooks";
import * as Markup from "./search.styles";

const apply = <Markup.ApplyIcon />;

const clean = <Markup.CleanIcon />;

export const Search = () => {
  const { value, actions } = useStoreState();

  return (
    <Markup.Container isEmptyValue={!value}>
      <Markup.Input>
        <Input value={value} onChange={actions.handleSearchChange} />
      </Markup.Input>
      <Markup.Actions>
        {!!value && <Apply onClick={actions.handleSearchClean} text={clean} />}
        <Apply onClick={actions.handleSearchApply} text={apply} />
      </Markup.Actions>
    </Markup.Container>
  );
};
