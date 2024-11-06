import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Products from '../components/Products';
import Dashboard from '../pages/Dashboard';
import Statistics from '../pages/Statistics';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../components/Cart';
import Wishlist from '../components/Wishlist';
import AboutUs from '../pages/AboutUs';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/categories.json'),
        children: [
          {
            path: "/",
            element: <Products></Products>,
            loader: () => fetch('/productsData.json'),
          },
          {
            path: "/category/:category",
            element: <Products></Products>,
            loader: () => fetch('/productsData.json'),
          }
        ]
      },
      {
        path: '/product/:id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/productsData.json'),
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>,   
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/productsData.json'),     
      },
    ],
  },
])


export default routes;