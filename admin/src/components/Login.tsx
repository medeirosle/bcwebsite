import React, { useState } from 'react'
import { Grid, Button, TextField, Card } from '@mui/material'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Add your login logic here
  }

  return (
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
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'left' }}>
            <Button type="reset" variant="contained" color="secondary">
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  )
}

export default Login
