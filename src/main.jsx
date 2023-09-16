import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/index.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Item from './pages/item.jsx'
import CollectionItems from './pages/collectionitems.jsx'
import Collection from './pages/collection.jsx'
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
