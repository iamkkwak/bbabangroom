import { css } from '@emotion/react';
import { infoTextColor, mainColor } from '@styles/colors.styles';

export const priceOutput = css`
  * {
    font-size: 100%;
  }

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const priceResult = css`
  text-align: center;
  vertical-align: bottom;
  line-height: 3rem;
  margin: 0.5rem 0;

  .price {
    font-size: 120%;
    font-weight: bolder;
    color: ${mainColor.c01};
    vertical-align: bottom;
  }

  .info {
    display: block;
    color: ${infoTextColor};
    font-size: 1.4rem;
  }
`;
