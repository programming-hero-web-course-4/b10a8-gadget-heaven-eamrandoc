import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';
import Dashboard from '../pages/Dashboard';
import ErrorPage from '../pages/ErrorPage';
import Products from '../components/Products';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/',
            element:<Products></Products>,
            loader: ()=> fetch('/productsData.json'),
            },
        ]
      },
      {
        // path: '/',
        // element:<Products></Products>,
        // loader: () => fetch('../productsData.json'),
        },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },

    ]
  },
]);

export default routes;