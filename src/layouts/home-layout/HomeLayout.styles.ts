import { css } from '@emotion/react';

export const homeLayout = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const home = (isLandscape: boolean) => css`
  display: flex;
  flex-direction: ${isLandscape ? 'row' : 'column'};
  align-items: center;
  justify-content: center;

  row-gap: 8vh;
  column-gap: 8vw;
  padding: 2rem;

  ${isLandscape
    ? css`
        width: 80vw;
      `
    : css`
        min-width: 50vw;
      `}

  > a {
    flex: 1;
    width: 100%;
    height: 100%;
  }
`;
