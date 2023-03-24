import { css } from '@emotion/react';

export const timeTableWrap = (isLandscape: boolean) => css`
  text-align: center;
  width: ${isLandscape ? '52rem' : '35rem'};
  min-height: 28rem;

  .mantine-Badge-root {
    font-size: 100%;
    width: 7.5rem;
    height: 3rem;
    margin: 0.5rem;
  }
`;

export const colorLegend = css`
  display: flex;
  justify-content: end;
  font-size: 90%;
  height: 3.5rem;

  > span {
    line-height: 2.1rem;
    vertical-align: middle;
    margin: 0 2rem 0 1rem;
  }
`;
