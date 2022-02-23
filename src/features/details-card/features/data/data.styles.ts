import styled from "styled-components";

export const Li = styled.li`
  display: block;
  list-style: none;
`;

export const Ul = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;

  ${Li} + ${Li} {
    margin-top: 7px;
  }
`;

export const Dl = styled.dl`
  display: flex;
  margin: 0;
`;

export const Dt = styled.dt`
  flex-basis: 40%;
  font-weight: bold;
`;
export const Dd = styled.dd`
  flex-basis: 60%;
`;
