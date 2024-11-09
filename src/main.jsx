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
import Laptops from './Components/Laptops/Laptops.jsx';
import Error from './Components/Error/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children:[
          {
            path: '/',
            element: <AllProduct></AllProduct>,
            errorElement: <Error></Error>,
          },
          {
            path: '/laptops',
            element: <Laptops></Laptops>
          },
        ]
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'popularity',
        element: <Popularity></Popularity>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
