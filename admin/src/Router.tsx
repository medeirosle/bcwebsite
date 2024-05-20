import { createBrowserRouter, Navigate } from 'react-router-dom'
import { checkUserAuthentication } from './services/Auth.service'
import { useCookies } from 'react-cookie'

import Login from './components/Login'
import Main from './components/Main'

export default createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/main',
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    )
  }
])

function PrivateRoute({ children }): any {
  const [cookies, setCookie] = useCookies(['bcAdminToken'])

  const isAuthenticated = checkUserAuthentication(cookies)

  return isAuthenticated ? children : <Navigate to="/" />
}
