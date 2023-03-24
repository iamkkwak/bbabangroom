import { css } from '@emotion/react';
import { selectNone } from '@styles/utils.styles';

export const statusLayout = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${selectNone};
`;

export const status = (isLandscape: boolean) => css`
  display: flex;
  flex-direction: ${isLandscape ? 'row' : 'column'};
  align-items: center;
  justify-content: center;

  row-gap: 5vh;
  column-gap: 5vw;
  padding: 2rem;

  ${isLandscape
    ? css`
        width: 90vw;
      `
    : css`
        min-width: 50vw;
      `}

  > div {
    height: 100%;
  }
`;
