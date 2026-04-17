import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'auralith-ui/styles.css'
import './index.css'
import App from './App.tsx'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
