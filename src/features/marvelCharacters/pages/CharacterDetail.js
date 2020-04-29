import apiErrorImage from 'assets/images/marvel-api-error.jpg'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { CharacterDetailInfo } from '../components/CharacterDetailInfo'
import { CharacterDetailSkeleton } from '../components/CharacterDetailSkeleton'
import { CharactersError } from '../components/CharactersError'
import { fetchCharacterById, selectCharacter } from '../slices/CharacterSlice'
import { isObjEmpty, scrollToTop } from '../utilities'

export default function CharacterDetail() {
  const dispatch = useDispatch()
  const history = useHistory()

  const { entities: character, loading, error } = useSelector(selectCharacter)
  const getCharacterIdInURL = () => {
    const splittedPathname = history.location.pathname.split('/detail/')
    const id = splittedPathname[1]
    return id
  }

  useEffect(() => {
    const getCharacterById = (id) => {
      dispatch(fetchCharacterById(id))
    }
    const id = getCharacterIdInURL()
    getCharacterById(id)
    scrollToTop()
  }, [dispatch, history.location.pathname])

  if (character === undefined || error) {
    return (
      <CharactersError
        errorMessage="Oops, couldn't get the character, try again later!"
        img={apiErrorImage}
      />
    )
  }
  if (
    isObjEmpty(character) ||
    (String(character.results[0].id) !== getCharacterIdInURL() &&
      loading === 'idle') ||
    loading === 'pending'
  ) {
    return <CharacterDetailSkeleton />
  }
  if (
    !isObjEmpty(character) &&
    String(character.results[0].id) === getCharacterIdInURL()
  ) {
    const characterInfo = character.results[0]
    return (
      <>
        <CharacterDetailInfo characterInfo={characterInfo} />
      </>
    )
  }
  return ''
}
