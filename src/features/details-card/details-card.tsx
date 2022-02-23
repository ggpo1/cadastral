import React from "react";
import { Icons } from "assets";
import { useDetails } from "./details-card.hooks";
import * as Features from "./features";
import * as Markup from "./details-card.styles";

export const DetailsCard = () => {
  const { details, handleClose } = useDetails(); // isLoading,

  // if (isLoading) {
  //   return (
  //     <Markup.Container>
  //       <Markup.Header>
  //         <Markup.Title />
  //         <Markup.Actions>
  //           <Markup.Button onClick={handleClose}>
  //             <Icons.Clean />
  //           </Markup.Button>
  //         </Markup.Actions>
  //       </Markup.Header>
  //       <Features.Loading />
  //     </Markup.Container>
  //   );
  // }

  if (!details) return null;

  return (
    <Markup.Container>
      <Markup.Header>
        <Markup.Title>{details.attrs?.id}</Markup.Title>
        <Markup.Actions>
          <Markup.Button onClick={handleClose}>
            <Icons.Clean />
          </Markup.Button>
        </Markup.Actions>
      </Markup.Header>
      <Markup.Body>
        <Features.Data />
      </Markup.Body>
    </Markup.Container>
  );
};
