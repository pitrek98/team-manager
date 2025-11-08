import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TeamList from './pages/TeamList';
import TeamDetails from './pages/TeamDetails';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TeamList />,
  },
  {
    path: '/team/:id',
    element: <TeamDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
