import { css } from '@emotion/react';
import { selectNone } from '@styles/utils.styles';

export const footer = css`
  ${selectNone};

  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 2.5rem;
  overflow: hidden;
  background-color: #eee;

  font-size: 1.1rem;
  color: #888;
  text-align: center;
`;
