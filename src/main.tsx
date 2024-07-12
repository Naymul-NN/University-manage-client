import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/features/store.ts'
import { PersistGate } from 'redux-persist/lib/integration/react'
// import { store } from './redux/features/hooks.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

      <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
