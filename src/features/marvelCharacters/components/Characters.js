import Grid from '@material-ui/core/Grid'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchCharactersByName,
  selectCharacters
} from '../slices/CharactersSlice'
import CharacterCard from './CharacterCard'
import { CharactersError } from './CharactersError'
import CharacterSkeleton from './CharacterSkeleton'

export default function Characters() {
  const dispatch = useDispatch()
  const { entities: characters, loading, error } = useSelector(selectCharacters)
  console.log(characters, loading, error)
  useEffect(() => {
    const getCharacters = () => {
      dispatch(fetchCharactersByName())
    }
    getCharacters()
  }, [dispatch])

  if (loading === 'pending') {
    return <CharacterSkeleton />
  }

  if (error) {
    return <CharactersError />
  }

  return (
    <>
      <Grid container spacing={4}>
        {characters.length > 0 &&
          characters[0].results.map((card) => (
            <CharacterCard card={card} key={card.id} />
          ))}
      </Grid>
    </>
  )
}
