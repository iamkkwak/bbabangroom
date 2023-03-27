import { css } from '@emotion/react';
import { mainColor } from '@styles/colors.styles';

export const datePickerWrap = css`
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    font-size: 100%;
  }

  .mantine-DatePicker-calendarHeader {
    font-size: 120%;
    height: 4rem;
    max-width: unset;
  }

  .mantine-DatePicker-calendarHeaderLevel {
    pointer-events: none;
  }

  .mantine-DatePicker-month {
    width: 30rem;
    height: 24rem;
  }

  .mantine-DatePicker-day {
    width: 90%;
    height: 90%;

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

  .mantine-DatePicker-monthCell {
    text-align: center;
  }
`;
