import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  position: absolute;
  right: 24px;
  bottom: 24px;
  width: 350px;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  flex-grow: 1;
  padding-left: 8px;
`;

export const Actions = styled.div``;

export const Button = styled.button`
  display: block;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;

  svg {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Body = styled.div`
  padding: 8px;
`;
