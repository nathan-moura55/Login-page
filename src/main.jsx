import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Login from './components/login/login/login.jsx'
import Message from './components/login/message/message.jsx'
import Error from './components/login/error/page-error.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/login/register/register.jsx'

const router = createBrowserRouter([
  {
    path: '*',
    element: <Error />
  },
  {
    path: '/',
    element: <Login />
  },
  {
    path: "/message",
    element: <Message />
  },
  {
    path: "/register",
    element: <Register />
  }

]);

createRoot(document.getElementById('root')).render(
  <div className='all'>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  </div>
)
