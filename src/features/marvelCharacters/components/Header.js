import { IconButton } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import marvelLogo from 'assets/images/marvel-logo.png'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { resetPagination } from '../slices/PaginationSlice'
import { resetSearch } from '../slices/SearchSlice'

export default function Header() {
  const history = useHistory()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(resetPagination())
    dispatch(resetSearch())
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
