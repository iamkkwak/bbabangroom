import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { css, Global } from '@emotion/react';
import { MantineProvider } from '@mantine/core';
import { globalStyles } from '@styles/global.styles';

import { ErrorLayout, HomeLayout, PriceLayout, RootLayout, StatusLayout } from './layouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: '/',
        element: <HomeLayout />,
      },
      {
        path: '/status',
        element: <StatusLayout />,
      },
      {
        path: '/price',
        element: <PriceLayout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global
      styles={css`
        ${globalStyles}
      `}
    />
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
);
