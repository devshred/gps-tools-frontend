import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const prepareMockServiceWorker = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser')
    return worker.start()
  }

  return Promise.resolve()
}

prepareMockServiceWorker().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
