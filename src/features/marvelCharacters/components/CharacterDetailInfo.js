import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectCharacter } from '../slices/CharacterSlice'
import CharacterCard from './CharacterCard'
import { EditCharacterDialog } from './EditCharacterDialog'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh'
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
    margin: theme.spacing(3, 3),
    display: 'flex',
    flexDirection: 'column'
    // alignItems: 'center'
  }
}))

export function CharacterDetailInfo({ characterInfo }) {
  const classes = useStyles()
  const theme = useTheme()
  const history = useHistory()
  const dispatch = useDispatch()
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'))
  const { entities: character } = useSelector(selectCharacter)
  const [open, setOpen] = useState(false)
  const [characterName, setCharacterName] = useState('')

  useEffect(() => {
    setCharacterName(character.results[0].name)
  }, [character])

  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <Grid
          item
          xs={false}
          sm={6}
          md={7}
          className={classes.image}
          style={{
            backgroundImage: `url(
                ${characterInfo.thumbnail.path}.${characterInfo.thumbnail.extension}
              )`
          }}
        />

        <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <div style={{ display: 'flex' }}>
              <Button
                color="secondary"
                size="large"
                variant="outlined"
                style={{
                  marginBottom: theme.spacing(2),
                  width: isExtraSmallScreen ? '49%' : '150px',
                  marginRight: '2%',
                  float: 'left'
                }}
                onClick={() => handleClickOpen()}
              >
                Edit name
              </Button>
              <Button
                color="primary"
                size="large"
                variant="outlined"
                style={{
                  marginBottom: theme.spacing(2),
                  width: isExtraSmallScreen ? '49%' : '150px',
                  float: 'left'
                }}
                onClick={() => {
                  history.push('/')
                }}
              >
                Go back
              </Button>
            </div>
            <Grid container direction={isExtraSmallScreen ? 'row' : 'column'}>
              <Typography gutterBottom variant="h4">
                {characterName}
              </Typography>

              {isExtraSmallScreen && (
                <>
                  <CharacterCard card={characterInfo} showContent={false} />
                  <Box m={2} />
                </>
              )}
              <Grid container direction="column">
                <Typography gutterBottom variant="h6">
                  {characterInfo.description ||
                    'This character prefer to keep a mistery about him...'}
                </Typography>
                <Typography gutterBottom variant="h5">
                  Series
                </Typography>
                {characterInfo.series.items.length > 0 ? (
                  characterInfo.series.items.map((serie) => (
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      key={serie.name}
                    >
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
            </Grid>
          </div>
        </Grid>
      </Grid>
      <EditCharacterDialog
        {...{
          open,
          characterName,
          setCharacterName,
          setOpen
        }}
      />
    </>
  )
}
