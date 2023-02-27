import { css } from '@emotion/react';
import { mainColor } from '@styles/colors.styles';
import { selectNone } from '@styles/utils.styles';

export const header = css`
  ${selectNone};

  display: flex;
  align-items: center;
  width: 100%;
  min-height: 5.8rem;
  padding: 1.2rem 0;
  background: linear-gradient(135deg, ${mainColor.c01}, ${mainColor.c02});
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 1rem;
  overflow: hidden;
  white-space: nowrap;
`;

export const title = css`
  display: flex;
  align-items: center;
  margin: 0 1rem 0 2rem;
  white-space: nowrap;

  > svg {
    margin-right: 1.5rem;
  }

  > span {
    color: white;
    font-size: 2.4rem;
    font-weight: bold;
  }
`;

export const link = css`
  margin-right: 1.5rem;
  margin-left: auto;
  text-align: right;

  > * {
    margin-left: 1rem;
  }
`;
