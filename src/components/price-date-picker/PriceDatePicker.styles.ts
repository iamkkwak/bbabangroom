import { css } from '@emotion/react';
import { mainColor } from '@styles/colors.styles';

export const priceDatePicker = css`
  * {
    font-size: 100%;
  }

  .mantine-DatePickerInput-calendarHeader {
    height: 4rem;
    max-width: unset;
  }

  .mantine-DatePickerInput-calendarHeaderLevel {
    pointer-events: none;
  }

  .mantine-DatePickerInput-calendarHeaderControl {
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  .mantine-DatePickerInput-month {
    min-width: 25rem;
  }

  .mantine-DatePickerInput-monthRow {
    height: 3.8rem;

    > td {
      height: inherit;
    }
  }

  .mantine-DatePickerInput-monthCell {
    text-align: center;
  }

  .mantine-DatePickerInput-day {
    width: 3.8rem;
    height: 3.8rem;

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
