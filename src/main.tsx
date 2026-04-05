import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'auralith-ui/styles.css'
import './index.css'
import App from './App.tsx'
import { AuralithDocsPage } from './pages/AuralithDocsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<AuralithDocsPage />} path="/auralith-ui/*" />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
