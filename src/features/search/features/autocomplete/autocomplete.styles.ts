import styled from "styled-components";

export const Button = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  border: none;
  background-color: transparent;

  &:hover {
    background-color: #fafafa;
    cursor: pointer;
  }
`;

export const Variant = styled.div`
  display: block;
  width: 100%;
`;

export const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  transform: translate(0, 6px);
  background-color: #ffffff;
  max-height: 200px;
  overflow: scroll;
  border: 1px solid #c4c4c4;
  box-shadow: 0 0 6px 0px rgba(34, 60, 80, 0.2);

  ${Variant} + ${Variant} {
    padding-top: 4px;
    margin-top: 4px;
  }
`;
