import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import marvelLogo from 'assets/images/marvel-logo.png'
import React from 'react'

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <img src={marvelLogo} width={200} alt="marvel_logo" />
      </Toolbar>
    </AppBar>
  )
}
