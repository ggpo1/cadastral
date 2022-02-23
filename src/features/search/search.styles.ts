import styled from "styled-components";
import { Icons } from "assets";
import { StyleState } from "./search.types";

const getStyleByState = (args: StyleState) => {
  const value = ["1fr"];

  if (args.isLoading) value.push("32px");
  if (!args.isEmptyValue) value.push("32px");

  return value.join(" ");
};

export const Container = styled.div<StyleState>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ isEmptyValue, isLoading }) =>
    getStyleByState({ isEmptyValue, isLoading })};
  align-items: stretch;
  position: relative;
  background-color: #ffffff;
  padding: 4px;
`;

export const Input = styled.div``;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 32px 32px;
`;

export const CleanIcon = styled(Icons.Clean)`
  display: block;
  width: 24px;
  height: 24px;
`;
