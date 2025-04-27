import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <App />
    </div>
  </React.StrictMode>
)