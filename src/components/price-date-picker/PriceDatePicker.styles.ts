import { css } from '@emotion/react';
import { mainColor } from '@styles/colors.styles';

export const priceDatePicker = css`
  * {
    font-size: 100%;
  }

  .mantine-DatePickerInput-day {
    &[data-selected='true'] {
      background-color: ${mainColor.c01};

      &:hover {
        background-color: ${mainColor.c01};
      }
    }

    &[data-disabled='true'] {
      cursor: unset;
    }
  }
`;
