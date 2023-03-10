import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Sidebar} from './Sidebar'
import {NotFound} from './NotFound'
import {Editor} from './Editor'
import {Create} from './Create'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: '/starred',
    element: <div className="text-white">starred</div>
  },
  {
    path: '/plans/edit/:id',
    element: <Editor/>
  },
  {
    path: '*',
    element: <NotFound/>,
  },
  {
    path: '/plans/create',
    element: <Create/>,
  },
]);

ReactDOM.createRoot(document.getElementById('approot')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Sidebar />
  </React.StrictMode>,
)
