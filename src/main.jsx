import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CurrentDetailsProvider } from './context/getCurrentDetails.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <CurrentDetailsProvider>
    <App />
  </CurrentDetailsProvider>
  // </StrictMode>,
)
