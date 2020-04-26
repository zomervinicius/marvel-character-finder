import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import marvelNotFoundImg from 'assets/images/marvel-not-found.jpg'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  errorContent: {
    marginTop: theme.spacing(6),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}))
export function CharactersError() {
  const classes = useStyles()
  return (
    <div className={classes.errorContent}>
      <Typography
        gutterBottom
        variant="subtitle1"
        component="h2"
        style={{
          marginBottom: '40px'
        }}
      >
        Não foi possível buscar os personagens, tente novamente mais tarde!
      </Typography>
      <img src={marvelNotFoundImg} width={300} alt="not-found-img" />
    </div>
  )
}
