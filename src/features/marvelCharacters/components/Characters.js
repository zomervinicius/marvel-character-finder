import Grid from '@material-ui/core/Grid'
import apiErrorImage from 'assets/images/marvel-api-error.jpg'
import marvelCharNotFound from 'assets/images/marvel-char-not-found.jpg'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCharacters } from '../slices/allCharactersSlice'
import { isObjEmpty } from '../utilities'
import CharacterCard from './CharacterCard'
import { CharacterPagination } from './CharacterPagination'
import { CharactersError } from './CharactersError'
import CharacterSkeleton from './CharacterSkeleton'

export default function Characters() {
  const { entities: characters, loading, error } = useSelector(selectCharacters)

  if (loading === 'pending') {
    return <CharacterSkeleton />
  }

  if (error) {
    return (
      <CharactersError
        errorMessage="Oops, couldn't get the characters, try again later!"
        img={apiErrorImage}
      />
    )
  }
  if (
    characters &&
    !isObjEmpty(characters) &&
    characters.results.length === 0
  ) {
    return (
      <CharactersError
        errorMessage="Oops, no character found, try again!"
        img={marvelCharNotFound}
      />
    )
  }
  if (characters && !isObjEmpty(characters)) {
    return (
      <>
        <Grid container spacing={4}>
          {characters.results.map((card) => (
            <CharacterCard card={card} key={card.id} />
          ))}
        </Grid>
        <CharacterPagination />
      </>
    )
  }
  return ''
}
