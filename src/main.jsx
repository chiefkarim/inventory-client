import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Collection from './pages/Collection.jsx'
import CollectionItems from './pages/CollectionItems'
import Item from './pages/item'
const router = createBrowserRouter([
  {
    path: '/',
    element:<Index/>
  },
  {
    path:'/collection',
    element:<Collection/>
  },
  {
    path:'/collection/:id',
    element:<CollectionItems/>
  },{
    path:'/item/:id',
    element:<Item/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
