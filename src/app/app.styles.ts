import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export const Search = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 350px;

  @media (max-width: 767px) {
    top: 24px;
    right: 24px;
    left: 24px;
    width: auto;
  }
`;
