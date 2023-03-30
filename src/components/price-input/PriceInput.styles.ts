import { css } from '@emotion/react';
import { infoTextColor } from '@styles/colors.styles';

export const priceInput = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;

  > h3 {
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 0.6rem;

    > label {
      display: inline-block;
      font-weight: bold;
      min-width: 9.5rem;

      svg {
        color: ${infoTextColor};
      }

      span {
        font-size: 1.2rem;
      }
    }

    > div {
      flex: 1;
      min-width: 20rem;
    }
  }
`;
