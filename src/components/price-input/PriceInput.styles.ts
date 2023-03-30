import { css } from '@emotion/react';
import { infoTextColor } from '@styles/colors.styles';

export const priceInput = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;

  // iOS에서 input이 16px 이하면 확대되는 문제 방지
  .mantine-InputWrapper-root {
    font-size: 16px;
  }

  svg {
    color: ${infoTextColor};
  }

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 0.6rem;

    > label {
      display: inline-block;
      font-weight: bold;
      min-width: 10rem;

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

export const description = css`
  display: block;
  color: ${infoTextColor};
  font-size: 1.2rem;
  line-height: 160%;

  margin-bottom: 1rem;
`;
