import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { RouterProvider } from "react-router-dom"
import { router } from "./router/router";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
