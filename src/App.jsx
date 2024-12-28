import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/app-layout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import RedirectLink from './pages/RedirectLink';
import Link from './pages/Link';
import LandingPage from './pages/LandingPage';

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/auth",
          element: <Auth />,
        },
        {
          path: "/dashboard",
          element: (
            // <RequireAuth>
              <Dashboard />
            // </RequireAuth>
          ),
        },
        {
          path: "/link/:id",
          element: (
            // <RequireAuth>
              <Link />
            // {/* </RequireAuth> */}
          ),
        },
        {
          path: "/:id",
          element: <RedirectLink />,
        },
      ],
    },
  ]);
  
  
  return (
    <RouterProvider router={router} />
  )
}

export default App