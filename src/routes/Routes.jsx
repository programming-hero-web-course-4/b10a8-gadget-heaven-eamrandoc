import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';
import Dashboard from '../pages/Dashboard';
import ErrorPage from '../pages/ErrorPage';

const routes = createBrowserRouter ([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>
        },
        {
          path:'/dashboard',
          element: <Dashboard></Dashboard>
        },
        
      ]
    },
  ]);

export default routes;