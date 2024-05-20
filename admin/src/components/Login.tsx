import React, { useState } from 'react'
import { Grid, Button, TextField, Card } from '@mui/material'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
import { authenticate } from '../api/auth.api'

const Login: React.FC = () => {
  const [cookies, setCookie] = useCookies(['bcAdminToken'])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captcha, setCaptcha] = useState('')

  const navigate = useNavigate()

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const clearForm = () => {
    setEmail('')
    setPassword('')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const result = await authenticate(email, password)

    if (result.token) {
      setCookie('bcAdminToken', result.token, { path: '/' })
      navigate('/main')
    } else if (result.statusCode === 401) {
      alert('Invalid email or password')
    } else {
      alert('Something went wrong')
    }
  }

  return (
    <div id="login">
      <Card variant="outlined" sx={{ padding: 5 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            margin="normal"
          />
          <br />
          <br />
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_SITE_KEY}
            onChange={setCaptcha}
          />
          {captcha ? (
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={6} sx={{ textAlign: 'right' }}>
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'left' }}>
                <Button
                  type="button"
                  variant="contained"
                  color="secondary"
                  onClick={() => clearForm()}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
          ) : null}
        </form>
      </Card>
    </div>
  )
}

export default Login
