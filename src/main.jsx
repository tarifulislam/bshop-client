import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {RouterProvider} from "react-router-dom";
import myRouter from './Route/Route';

import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';

import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
                <div className=' max-w-screen-xl mx-auto'>
                    <RouterProvider router={myRouter} />
                </div>
            </HelmetProvider>
        </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
