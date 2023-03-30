import { css } from '@emotion/react';
import { scrollOverlay, selectNone } from '@styles/utils.styles';

export const priceLayout = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: auto;

  ${selectNone};
  ${scrollOverlay}
`;

export const price = (isLandscape: boolean) => css`
  display: flex;
  flex-direction: ${isLandscape ? 'row' : 'column'};
  align-items: center;

  row-gap: 2vh;
  column-gap: 5vw;

  height: ${isLandscape ? '' : '100%'};
  min-height: ${isLandscape ? '' : '100%'};
  padding: 2rem;

  ${isLandscape
    ? css`
        width: 70vw;
        justify-content: center;

        > div:first-of-type {
          align-self: flex-start;
        }
      `
    : css`
        min-width: 50vw;

        > div:last-of-type {
          width: min(100%, 36.6rem);
        }
      `}

  > div {
    height: 100%;
  }
`;
