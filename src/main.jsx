import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Product, {loader as productLoader, action as productAction }from './routes/product';
import Shop, {loader as categoryLoader} from './routes/shop';
import Root, {loader as rootLoader} from './routes/home';
import Cart, {loader as cartLoader} from './routes/cart';

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
        action: productAction,
      },
      {
        path: "Cart",
        element: <Cart />,
        loader: cartLoader,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
