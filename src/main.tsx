import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

// Initialize Telegram Mini App
if (window.Telegram) {
  window.Telegram.WebApp?.ready()
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
