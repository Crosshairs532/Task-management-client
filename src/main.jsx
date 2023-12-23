import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router/Router'
import { RouterProvider } from 'react-router'
import AuthProvider from './authProvider/AuthProvider'
import {


  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { Toaster } from 'react-hot-toast'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode >
    < QueryClientProvider client={queryClient} >
      <AuthProvider>
        <Toaster />
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode >
)
