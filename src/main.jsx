import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router/Router'
import { RouterProvider } from 'react-router'
import AuthProvider from './authProvider/AuthProvider'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

  </React.StrictMode>,
)
