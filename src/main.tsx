import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TeamList from './pages/TeamList';
import TeamDetails from './pages/TeamDetails';
import NewTeam from './pages/NewTeam';
import NewPlayer from './pages/NewPlayer';
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
  {
    path: '/new-team',
    element: <NewTeam />,
  },
  {
    path: '/team/:id/new-player',
    element: <NewPlayer />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
