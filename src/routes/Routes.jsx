import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';

const routes = createBrowserRouter ([
    {
      path: "/",
      element: <Layout></Layout>,
    },
  ]);

export default routes;