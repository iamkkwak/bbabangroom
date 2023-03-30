import { css } from '@emotion/react';
import { mainColor } from '@styles/colors.styles';

export const priceTimeSelect = css`
  * {
    font-size: 100%;
  }

  .mantine-Select-item[data-selected='true'] {
    background-color: ${mainColor.c01};
  }
`;
