import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Login from './components/login/login/login.jsx'
import Message from './components/login/message/message.jsx'
import Error from './components/login/error/page-error.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '*',
    element: <Error />
  },
  {
    path: '/',
    element: <Login />,
  },
  {
    path: "/message",
    element: <Message />
  }
]);

createRoot(document.getElementById('root')).render(
  <div className='all'>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  </div>
)
