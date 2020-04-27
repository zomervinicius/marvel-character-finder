import { IconButton } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import marvelLogo from 'assets/images/marvel-logo.png'
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Header() {
  const history = useHistory()
  const handleClick = () => {
    history.push('/')
  }
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton style={{ padding: 0 }} onClick={handleClick} disableRipple>
          <img src={marvelLogo} width={200} alt="marvel_logo" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
