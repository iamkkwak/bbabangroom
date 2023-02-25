import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import { ErrorLayout, HomeLayout, PriceLayout, RootLayout, StatusLayout } from './layouts';

import './index.css';

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
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
);
