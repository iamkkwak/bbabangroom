import { css } from '@emotion/react';

export const reservationButton = (flexDirection: 'column' | 'row') => css`
  * {
    font-size: 100%;
  }

  display: flex;
  flex-direction: ${flexDirection};
  justify-content: center;
  row-gap: 1rem;
`;
