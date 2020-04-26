import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import Characters from '../components/Characters'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'

const updatedTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#090909'
    },
    secondary: {
      main: '#ec1d24'
    }
  }
})

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: theme.spacing(4)
  }
}))

export default function Index() {
  const classes = useStyles()

  return (
    <>
      <ThemeProvider theme={updatedTheme}>
        <CssBaseline />
        <Header />
        <main>
          <Container className={classes.cardGrid} maxWidth="xl">
            <SearchBox />
            <Characters />
          </Container>
        </main>
        {/*
        <Footer />
        */}
      </ThemeProvider>
    </>
  )
}
