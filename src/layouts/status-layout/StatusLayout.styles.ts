import { css } from '@emotion/react';
import { selectNone } from '@styles/utils.styles';

export const statusLayout = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;

  ${selectNone};
`;

export const status = (isLandscape: boolean) => css`
  display: flex;
  flex-direction: ${isLandscape ? 'row' : 'column'};
  align-items: center;

  column-gap: 5vw;

  height: ${isLandscape ? '' : '100%'};
  padding: 3rem 2rem;

  ${isLandscape
    ? css`
        width: 90vw;
        justify-content: center;
      `
    : css`
        min-width: 50vw;
      `}
`;
