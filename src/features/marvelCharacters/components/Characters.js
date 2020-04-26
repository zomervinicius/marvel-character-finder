import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchCharactersByOffset,
  selectCharacters
} from '../slices/CharactersSlice'
import { changePage, selectPagination } from '../slices/PaginationSlice'
import { isObjEmpty } from '../utilities'
import CharacterCard from './CharacterCard'
import { CharactersError } from './CharactersError'
import CharacterSkeleton from './CharacterSkeleton'

export default function Characters() {
  const dispatch = useDispatch()
  const { entities: characters, loading, error } = useSelector(selectCharacters)
  const { page } = useSelector(selectPagination)
  useEffect(() => {
    const getCharacters = () => {
      dispatch(fetchCharactersByOffset(0))
    }
    getCharacters()
  }, [])

  const useStyles = makeStyles((theme) => ({
    pagination: {
      float: 'right',
      '& > *': {
        marginTop: theme.spacing(4)
      }
    }
  }))
  const classes = useStyles()

  if (loading === 'pending') {
    return <CharacterSkeleton />
  }

  if (error) {
    return <CharactersError />
  }
  if (!isObjEmpty(characters)) {
    return (
      <>
        <Grid container spacing={4}>
          {characters.results.map((card) => (
            <CharacterCard card={card} key={card.id} />
          ))}
        </Grid>
        <div className={classes.pagination}>
          <Pagination
            count={Math.round(characters.total / characters.count)}
            color="secondary"
            // variant="outlined"
            shape="rounded"
            onChange={(e, page) => {
              dispatch(changePage(page))
              dispatch(fetchCharactersByOffset(20 * page - 20))
            }}
            page={page}
          />
        </div>
      </>
    )
  }
  return ''
}
