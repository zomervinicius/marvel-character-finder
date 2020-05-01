import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchCharactersByParams,
  selectCharacters
} from '../slices/CharactersSlice'
import { changePage, selectPagination } from '../slices/PaginationSlice'
import { scrollToTop } from '../utilities'

export function CharacterPagination() {
  const dispatch = useDispatch()
  const { entities: characters } = useSelector(selectCharacters)
  const { page } = useSelector(selectPagination)
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
            dispatch(changePage(pageToChange))
            dispatch(fetchCharactersByParams())
          }

          scrollToTop()
        }}
        page={page}
      />
    </div>
  )
}
