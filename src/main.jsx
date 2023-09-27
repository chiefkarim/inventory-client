import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/index.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import CollectionItems from './pages/CollectionItems.jsx'
import Item from './pages/Item.jsx'
import Collection from './pages/Collection.jsx'
import SingIn from './pages/Sing-in.jsx'
import CollectionControls from './components/CollectionControls.jsx'
import ItemController from './components/ItemController.jsx'
import { Provider } from 'react-redux'
import store from './store.js'

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
    element:<CollectionControls action='create'/>
  },
  {
    path:'/collection/:id/edit',
    element:<CollectionControls action='edit'/>
  },
  
  {
    path:'/collection',
    element:<Collection/>
  },
  {
    path:'/collection/:id',
    element:<CollectionItems/>
  },
  {
    path:'/item/create',
    element:<ItemController action='create'/>
  },
  {
    path:'/item/:id/edit',
    element:<ItemController action='edit'/>
  }
  ,
  {
    path:'/item/:id',
    element:<Item/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
