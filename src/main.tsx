import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { css, Global } from '@emotion/react';
import {
  ErrorLayout,
  HomeLayout,
  PriceLayout,
  RootLayout,
  StatusLayout,
} from '@layouts';
import { MantineProvider } from '@mantine/core';
import { globalStyles } from '@styles/global.styles';

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
  <>
    <MantineProvider>
      <Global
        styles={css`
          ${globalStyles}
        `}
      />
      <RouterProvider router={router} />
    </MantineProvider>
  </>,
);
