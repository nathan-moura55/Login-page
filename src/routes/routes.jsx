import { createBrowserRouter } from 'react-router-dom'
import Message from "../components/login/message/message";
import Login from "../components/login/login/login";
import Error from "../components/login/error/page-error";


const RouterProvider = createBrowserRouter([
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

export default RouterProvider;