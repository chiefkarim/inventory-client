import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/index.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import CollectionItems from './pages/CollectionItems.jsx'
import Item from './pages/Item.jsx'
import Collection from './pages/Collection.jsx'
import SingIn from './pages/Sing-in.jsx'
import EditItem from './pages/CreateItem.jsx'
import CreateCollection from './pages/CreateCollection.jsx'
import EditCollection from './pages/EditCollection.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element:<Index/>
  },
  {
    path:'/log-in',
    element:<SingIn/>
  },
  {
    path:'/collection/create',
    element:<CreateCollection/>
  },
  {
    path:'/collection/:id/edit',
    element:<EditCollection/>
  },
  {
    path:'/item/create',
    element:<EditItem/>
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
