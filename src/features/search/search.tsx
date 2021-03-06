import React from "react";
import { Icons } from "assets";
import { Input, Autocomplete, Apply } from "./features";
import * as hooks from "./search.hooks";
import * as Markup from "./search.styles";

const clean = <Markup.CleanIcon />;
const spinner = <Icons.Spinner />;

export const Search = () => {
  const { value, actions } = hooks.useStoreState();
  const { isLoading } = hooks.useIsLoading();

  return (
    <Markup.Container isEmptyValue={!value} isLoading={isLoading}>
      <Markup.Input>
        <Input
          value={value}
          placeholder="Поиск по номеру"
          onChange={actions.handleSearchChange}
        />
        <Autocomplete />
      </Markup.Input>
      <Markup.Actions>
        {isLoading && spinner}
        {!!value && <Apply onClick={actions.handleSearchClean} text={clean} />}
      </Markup.Actions>
    </Markup.Container>
  );
};
