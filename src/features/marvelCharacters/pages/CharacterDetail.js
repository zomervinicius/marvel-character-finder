import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Skeleton from '@material-ui/lab/Skeleton'
import apiErrorImage from 'assets/images/marvel-api-error.jpg'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { CharacterDetailInfo } from '../components/CharacterDetailInfo'
import { CharactersError } from '../components/CharactersError'
import { fetchCharacterById, selectCharacter } from '../slices/CharacterSlice'
import { isObjEmpty, scrollToTop } from '../utilities'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh'
  }
}))

export default function CharacterDetail() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const theme = useTheme()
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'))
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
    return (
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={6} md={7}>
          <Skeleton
            variant="rect"
            style={{ paddingTop: '80%' }}
            width="auto"
            height="auto"
            animation="wave"
          />
        </Grid>
        {isExtraSmallScreen && (
          <Grid item xs={12} sm={6} md={3} style={{ marginTop: '40px' }}>
            <Skeleton animation="wave" style={{ marginBottom: '8px' }} />
            <Skeleton
              variant="rect"
              style={{ paddingTop: '80%' }}
              width="auto"
              height="auto"
              animation="wave"
            />
          </Grid>
        )}
        <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
          {[...Array(33)].map((i) => (
            <Skeleton animation="wave" key={i} style={{ marginTop: '8px' }} />
          ))}
        </Grid>
      </Grid>
    )
  }
  if (
    !isObjEmpty(character) &&
    String(character.results[0].id) === getCharacterIdInURL()
  ) {
    const characterInfo = character.results[0]
    return (
      <>
        <CharacterDetailInfo
          isExtraSmallScreen={isExtraSmallScreen}
          characterInfo={characterInfo}
        />
      </>
    )
  }
  return ''
}
