import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header'
import { fetchCharacterById, selectCharacter } from '../slices/CharacterSlice'
import { isObjEmpty } from '../utilities'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

export default function SignInSide() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const { entities: character, loading, error } = useSelector(selectCharacter)
  console.log(character, loading, error)

  useEffect(() => {
    const getCharacterById = (id) => {
      dispatch(fetchCharacterById(id))
    }
    const splittedPathname = history.location.pathname.split('/detail/')
    const id = splittedPathname[1]
    getCharacterById(id)
  }, [dispatch, history.location.pathname])
  console.log(character)
  if (!isObjEmpty(character)) {
    const characterInfo = character.results[0]
    return (
      <>
        <Header />
        <Grid container component="main" className={classes.root}>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            className={classes.image}
            style={{
              backgroundImage: `url(
                ${characterInfo.thumbnail.path}.${characterInfo.thumbnail.extension}
              )`
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Grid container direction="column">
                <Typography gutterBottom variant="h4">
                  {characterInfo.name}
                </Typography>
                <Typography gutterBottom variant="h6">
                  {characterInfo.description ||
                    'This character prefer to keep a mistery about him...'}
                </Typography>
                <Typography gutterBottom variant="h5">
                  Series
                </Typography>
                {characterInfo.series.items.length > 0 ? (
                  characterInfo.series.items.map((serie) => (
                    <Typography gutterBottom variant="subtitle1">
                      {serie.name}
                    </Typography>
                  ))
                ) : (
                  <Typography gutterBottom variant="subtitle1">
                    {characterInfo.description ||
                      'We do not have register of this character in any serie...'}
                  </Typography>
                )}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </>
    )
  }
  return ''
}
