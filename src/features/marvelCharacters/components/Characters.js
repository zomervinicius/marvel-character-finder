import Grid from '@material-ui/core/Grid'
import apiErrorImage from 'assets/images/marvel-api-error.jpg'
import marvelCharNotFound from 'assets/images/marvel-char-not-found.jpg'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCharacters } from '../slices/CharactersSlice'
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
        <CharacterPagination />
      </>
    )
  }
  return ''
}
