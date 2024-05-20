const checkUserAuthentication = function (cookies) {
  const token = cookies.bcAdminToken
  if (!token) {
    return false
  }
  return true
}

const logout = function (setCookie) {
  setCookie('bcAdminToken', null, { path: '/' })
}

export { checkUserAuthentication, logout }
