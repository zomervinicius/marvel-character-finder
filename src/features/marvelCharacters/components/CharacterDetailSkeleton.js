import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Skeleton from '@material-ui/lab/Skeleton'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh'
  }
}))

export function CharacterDetailSkeleton() {
  const classes = useStyles()
  const theme = useTheme()
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={6} md={7}>
        <Skeleton
          variant="rect"
          style={{
            paddingTop: '80%'
          }}
          width="auto"
          height="auto"
          animation="wave"
        />
      </Grid>
      {isExtraSmallScreen && (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          style={{
            marginTop: '40px'
          }}
        >
          <Skeleton
            animation="wave"
            style={{
              marginBottom: '8px'
            }}
          />
          <Skeleton
            variant="rect"
            style={{
              paddingTop: '80%'
            }}
            width="auto"
            height="auto"
            animation="wave"
          />
        </Grid>
      )}
      <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
        {[...Array(32)].map((i) => (
          <Skeleton
            animation="wave"
            key={i}
            style={{
              marginTop: '8px'
            }}
          />
        ))}
      </Grid>
    </Grid>
  )
}
