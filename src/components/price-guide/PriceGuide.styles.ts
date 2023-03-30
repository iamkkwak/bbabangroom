import { css } from '@emotion/react';
import { infoTextColor, mainColor } from '@styles/colors.styles';

export const priceGuide = css`
  width: 100%;
  word-break: break-all;

  > h3 {
    margin-bottom: 2rem;
  }

  > h4 {
    margin-bottom: 0.8rem;
    color: ${mainColor.c01};
  }

  > p {
    margin-bottom: 2rem;

    > span {
      display: block;
      line-height: 2.6rem;
      padding-left: 0.8rem;
    }
  }
`;

export const tip = css`
  color: ${infoTextColor};
  font-size: 1.4rem;
`;
