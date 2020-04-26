import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import apiErrorImage from 'assets/images/marvel-api-error.jpg'
import marvelCharNotFound from 'assets/images/marvel-char-not-found.jpg'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchCharactersByParams,
  selectCharacters
} from '../slices/CharactersSlice'
import { changePage, selectPagination } from '../slices/PaginationSlice'
import { selectSearch } from '../slices/SearchSlice'
import { isObjEmpty } from '../utilities'
import CharacterCard from './CharacterCard'
import { CharactersError } from './CharactersError'
import CharacterSkeleton from './CharacterSkeleton'

export default function Characters() {
  const dispatch = useDispatch()
  const { entities: characters, loading, error } = useSelector(selectCharacters)
  const { search } = useSelector(selectSearch)
  const { page } = useSelector(selectPagination)
  useEffect(() => {
    const getCharacters = () => {
      dispatch(fetchCharactersByParams())
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
    return (
      <CharactersError
        errorMessage="Não foi possível buscar os personagens, tente novamente mais tarde!"
        img={apiErrorImage}
      />
    )
  }
  if (!isObjEmpty(characters) && characters.results.length === 0) {
    return (
      <CharactersError
        errorMessage="Não foi encontrado nenhum personagem, tente refazer a pesquisa!"
        img={marvelCharNotFound}
      />
    )
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
            count={Math.round(characters.total / characters.limit)}
            color="secondary"
            shape="rounded"
            onChange={(e, pageToChange) => {
              dispatch(changePage(pageToChange))
              dispatch(
                fetchCharactersByParams({
                  page: pageToChange,
                  nameStartsWith: search
                })
              )
            }}
            page={page}
          />
        </div>
      </>
    )
  }
  return ''
}
