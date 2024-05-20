import { useCookies } from 'react-cookie'

const checkUserAuthentication = function () {
  const [cookies, setCookie] = useCookies(['bcAdminToken'])

  const token = cookies.bcAdminToken
  if (!token) {
    return false
  }
  return true
}

export { checkUserAuthentication }
