import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Iphone from './Iphone'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = [
  {
    path: "/",
    element: <Iphone />
  },
  {
    path: "*",
    element: <Iphone />
  }
]
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)