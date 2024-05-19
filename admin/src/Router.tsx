import { createBrowserRouter } from 'react-router-dom'

import Login from './components/Login'

export default createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/main',
    element: <div>Hello Main!</div>
  }
])
