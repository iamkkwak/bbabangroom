import { css } from '@emotion/react';
import { mainColor } from '@styles/colors.styles';

export const homeLinkButton = css`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: 100%;
    height: 100%;
    min-width: min-content;
    padding: 4rem 3rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px,
      rgb(0 0 0 / 4%) 0px 7px 7px -5px;

    color: black;
    line-height: 1.5;

    :hover {
      background-color: #fafafa;
    }

    :active {
      box-shadow: none;
    }

    > h1 {
      > svg {
        margin-right: 1rem;
      }

      font-size: 3.2rem;
      white-space: nowrap;
      margin-bottom: 1.2rem;
      color: ${mainColor.c01};
    }

    > p {
      color: #888;
      font-size: 1.8rem;
    }
  }
`;
