import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //si quitamos el strictMode las cosas no se renderizan dos veces
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
