import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import {
  fetchCharactersByParams,
  selectCharacters
} from '../slices/CharactersSlice'
import { scrollToTop } from '../utilities'

export function CharacterPagination() {
  const dispatch = useDispatch()
  const { entities: characters } = useSelector(selectCharacters)
  const location = useLocation()
  const history = useHistory()
  const params = new URLSearchParams(location.search)
  const page = Number(params.get('page'))

  const useStyles = makeStyles((theme) => ({
    pagination: {
      float: 'right',
      '& > *': {
        marginTop: theme.spacing(4)
      }
    }
  }))
  const classes = useStyles()
  return (
    <div className={classes.pagination}>
      <Pagination
        count={Math.round(characters.total / characters.limit)}
        color="secondary"
        shape="rounded"
        onChange={(e, pageToChange) => {
          if (page !== pageToChange) {
            params.set('page', pageToChange)
            history.push(`?${params.toString()}`)
            dispatch(fetchCharactersByParams(params))
          }

          scrollToTop()
        }}
        page={page}
      />
    </div>
  )
}
