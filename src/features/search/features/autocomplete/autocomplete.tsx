import React from "react";
import { useStoreContext } from "store";
import * as Markup from "./autocomplete.styles";

const Button = (props: Api.AutocompleteSearchText.Variant) => {
  const storeContext = useStoreContext();
  const { title, value } = props;

  const handleClick = React.useCallback(() => {
    storeContext?.search.actions.set(value);
  }, [storeContext, value]);

  return <Markup.Button onClick={handleClick}>{title}</Markup.Button>;
};

export const Autocomplete = () => {
  const storeContext = useStoreContext();
  const variants = storeContext?.search.hooks.useAutocomplete();

  if (!variants) return null;
  if(Array.isArray(variants) && !variants.length) return null;

  return (
    <Markup.Container>
      {variants.map(({ title, value }) => (
        <Markup.Variant key={value}>
          <Button title={title} value={value} />
        </Markup.Variant>
      ))}
    </Markup.Container>
  );
};
