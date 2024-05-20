const authenticate = async function (email, password) {
  const url = `${import.meta.env.VITE_BASE_URL}/auth/signIn`

  try {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    return result.json()
  } catch (err) {
    console.error(err)

    return null
  }
}

export { authenticate }
