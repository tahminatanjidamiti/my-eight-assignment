import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Popularity from './Components/Popularity/Popularity.jsx';
import AllProduct from './Components/AllProduct/AllProduct.jsx';
import ProductDetail from './Components/ProductDetail/ProductDetail.jsx';
import Cart from './Components/Cart/Cart.jsx';
import WishList from './Components/WishList/WishList.jsx';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch('../gadgets.json'),
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../gadgets.json'),
        children:[
          {
            path: '/',
            element: <AllProduct></AllProduct>,
          },
          {
            path: '/category/:category',
            element: <AllProduct></AllProduct>
          },
        ]
      },
      {
        path: '/:product_id',
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch('../gadgets.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('../gadgets.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('../gadgets.json'),
        children: [
         {
          path: '/dashboard/cart',
          element: <Cart></Cart>,
         },
         {
          path: '/dashboard/wishlist',
          element: <WishList></WishList>,
         }
        ]
      },
      {
        path: '/popularity',
        element: <Popularity></Popularity>,
        loader: () => fetch('../gadgets.json')
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
