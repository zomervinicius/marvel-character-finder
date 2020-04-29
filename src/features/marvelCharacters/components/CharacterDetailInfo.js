import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCharacter } from '../slices/CharacterSlice'
import CharacterCard from './CharacterCard'

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
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'))
  const { entities: character } = useSelector(selectCharacter)
  const [open, setOpen] = useState(false)
  const [characterName, setCharacterName] = useState('')
  const [inputCharacterName, setInputCharacterName] = useState('')

  useEffect(() => {
    setCharacterName(character.results[0].name)
    setInputCharacterName(character.results[0].name)
  }, [character])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleEdit = () => {
    setCharacterName(inputCharacterName)
    setOpen(false)
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
            <Button
              color="secondary"
              size="large"
              variant="outlined"
              style={{
                marginBottom: theme.spacing(2),
                width: isExtraSmallScreen ? '100%' : '150px',
                float: 'left'
              }}
              onClick={() => handleClickOpen()}
            >
              Edit name
            </Button>
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
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Edit character name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            fullWidth
            label="Name"
            value={inputCharacterName}
            onChange={(e) => setInputCharacterName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEdit} color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
