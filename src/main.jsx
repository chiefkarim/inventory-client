import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/index'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Collection from './pages/Collection.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element:<Index/>
  },
  {
    path:'/collection',
    element:<Collection/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
