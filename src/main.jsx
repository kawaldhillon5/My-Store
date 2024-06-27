import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Product, {loader as productLoader }from './routes/product';
import Shop, {loader as categoryLoader, loader} from './routes/shop';
import Root, {loader as rootLoader} from './routes/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: rootLoader,
    children: [
      {
        path: "shop/:category",
        element: <Shop />,
        loader: categoryLoader,
      },
      {
        path: "shop/:category/:id",
        element: <Product />,
        loader: productLoader,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
