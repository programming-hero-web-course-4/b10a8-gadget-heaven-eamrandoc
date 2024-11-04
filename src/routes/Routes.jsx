import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Products from '../components/Products';
import Dashboard from '../pages/Dashboard';
import Statistics from '../pages/Statistics';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",
            element: <Products></Products>,
            loader: () => fetch('../productsData.json'),
          },
          {
            path: "/category/:category",
            element: <Products></Products>,
            loader: () => fetch('../productsData.json'),
          }
        ]
      },
      {
        // path: '/dashboard',
        // element: <Dashboard></Dashboard>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ],
  },
])

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout></Layout>,
//     errorElement: <ErrorPage></ErrorPage>,
//     children: [
//       {
//         path: '/',
//         element: <Home></Home>,
//         loader: async () => {
//           const categories = await fetch('/categories.json');
//           const products = await fetch('../productsData.json');
//           return {
//             categories: await categories.json(),
//             products: await products.json(),
//           };}
// ,

//       },
//       {
//         path: '/',
//         element: <Products></Products>,
//         loader: () => fetch('../productsData.json'),
//       },
//       {
//         path: '/statistics',
//         element: <Statistics></Statistics>
//       },
//       {
//         path: '/dashboard',
//         element: <Dashboard></Dashboard>
//       },

//     ]
//   },
// ]);

export default routes;