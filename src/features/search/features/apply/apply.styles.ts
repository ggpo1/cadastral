import styled from "styled-components";

export const Button = styled.button`
  display: block;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  text-align: center;

  > svg {
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    cursor: pointer;
  }
`;
