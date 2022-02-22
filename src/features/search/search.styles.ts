import styled, { css } from "styled-components";
import { Icons } from "assets";

export const Container = styled.div<{ isEmptyValue?: boolean }>`
  display: grid;
  width: 350px;
  grid-template-columns: ${({ isEmptyValue }) =>
    isEmptyValue ? "1fr 32px" : "1fr 64px"};
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

const icon = css`
  display: block;
  width: 24px;
  height: 24px;
`;

export const CleanIcon = styled(Icons.Clean)`
  ${icon}
`;

export const ApplyIcon = styled(Icons.Apply)`
  ${icon}
`;
