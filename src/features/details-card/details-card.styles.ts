import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  position: absolute;
  top: 24px;
  right: 24px;
  width: 350px;
  background-color: #ffffff;
  border-radius: 8px;

  @media (max-width: 767px) {
    top: 70px;
    right: 24px;
    left: 24px;
    width: auto;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  flex-grow: 1;
  padding-left: 8px;
  font-weight: bold;
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
