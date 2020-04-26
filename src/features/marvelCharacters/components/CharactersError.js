import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
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
export function CharactersError({ errorMessage, img }) {
  const classes = useStyles()
  return (
    <div className={classes.errorContent}>
      <Typography
        gutterBottom
        component="h2"
        variant="h6"
        style={{
          marginBottom: '40px'
        }}
      >
        {errorMessage}
      </Typography>
      <img src={img} width={300} alt="error-img" />
    </div>
  )
}
