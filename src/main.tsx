import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import ThemeProvider from './contexts/ThemeContext.tsx'
import './index.css'
import { router } from './routes/router.tsx'
import './translation/i18n';
import LangProvider from './contexts/langContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LangProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LangProvider>
  </React.StrictMode>,
)
