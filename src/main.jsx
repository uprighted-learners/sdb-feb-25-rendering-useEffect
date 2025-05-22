import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// <StrictMode> causes duplicates in the console (normal React behavior)
createRoot(document.getElementById('root')).render(
    <App />
)
