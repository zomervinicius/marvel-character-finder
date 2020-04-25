import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))
export default function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/vinicius-zomer/"
          target="_blank"
        >
          Vinícius Zomer
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </footer>
  )
}
