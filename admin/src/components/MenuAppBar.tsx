import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { useCookies } from 'react-cookie'
import { logout } from '../services/Auth.service'

export default function MenuAppBar() {
  const [cookies, setCookie] = useCookies(['bcAdminToken'])

  const logoutUser = () => {
    logout(setCookie)
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ margin: 0 }}>
      <AppBar position="static" sx={{ width: '100%', backgroundColor: '#333' }}>
        <Toolbar>
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Agenda</MenuItem>
              <MenuItem onClick={handleClose}>Divulgar Apresentação</MenuItem>
              <MenuItem onClick={handleClose}>Enviar PressKit</MenuItem>
            </Menu>
          </div>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Artist Manager
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={() => logoutUser()}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
