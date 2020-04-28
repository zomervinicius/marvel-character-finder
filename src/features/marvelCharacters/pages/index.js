import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Characters from '../components/Characters'
import SearchBox from '../components/SearchBox'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: theme.spacing(4)
  }
}))

export default function Index() {
  const classes = useStyles()

  return (
    <>
      <main>
        <Container className={classes.cardGrid} maxWidth="xl">
          <SearchBox />
          <Characters />
        </Container>
      </main>
    </>
  )
}
