import React from "react";
import { Icons } from "assets";
import { useDetails } from "./details-card.hooks";
import * as Features from "./features";
import * as Markup from "./details-card.styles";

export const DetailsCard = () => {
  const { details, isLoading, handleClose } = useDetails();

  if (isLoading) {
    return (
      <Markup.Container>
        <Markup.Header>
          <Markup.Title />
          <Markup.Actions>
            <Markup.Button onClick={handleClose}>
              <Icons.Clean />
            </Markup.Button>
          </Markup.Actions>
        </Markup.Header>
        <Features.Loading />
      </Markup.Container>
    );
  }

  if (!details) return null;

  return (
    <Markup.Container>
      <Markup.Header>
        <Markup.Title>Title</Markup.Title>
        <Markup.Actions>
          <Markup.Button onClick={handleClose}>
            <Icons.Clean />
          </Markup.Button>
        </Markup.Actions>
      </Markup.Header>
      <Markup.Body>
        <div>{JSON.stringify(details)}</div>
      </Markup.Body>
    </Markup.Container>
  );
};
