import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React from 'react'
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
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

export function CharacterDetailInfo({ characterInfo }) {
  const classes = useStyles()
  const theme = useTheme()
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'))
  return (
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
          <Grid container direction={isExtraSmallScreen ? 'row' : 'column'}>
            <Typography gutterBottom variant="h4">
              {characterInfo.name}
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
  )
}
