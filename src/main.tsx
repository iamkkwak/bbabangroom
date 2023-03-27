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

const { VITE_KAKAO_JAVASCRIPT_KEY } = import.meta.env;

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Kakao = (window as any)?.Kakao;
Kakao.init(VITE_KAKAO_JAVASCRIPT_KEY);

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
