import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Canvas = styled.canvas<{enabled: boolean}>`
  ${({enabled}) => !enabled && css`display: none;`}
  position: absolute;
  z-index: 98;
  inset: 0;
`;
