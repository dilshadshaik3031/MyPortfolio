import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'    // Tailwind (or your existing CSS)
import './global.css'   // overrides / dark-mode (must be loaded after Tailwind)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
