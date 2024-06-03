import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/index.routes'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='809577005715-0qg4s8vsldicsvvmkpj4e6cv9s3ad61p.apps.googleusercontent.com'>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode >
);
