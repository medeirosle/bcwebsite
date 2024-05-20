const checkUserAuthentication = function (cookies: any) {
  const token = cookies.bcAdminToken
  if (!token) {
    return false
  }
  return true
}

const logout = function (setCookie: any) {
  setCookie('bcAdminToken', null, { path: '/' })
}

export { checkUserAuthentication, logout }
