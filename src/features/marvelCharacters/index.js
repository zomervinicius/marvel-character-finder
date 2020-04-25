import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import Character from './Character'
import Footer from './Footer'
import Header from './Header'

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Index() {
  const classes = useStyles()
  return (
    <>
      <ThemeProvider theme={updatedTheme}>
        <CssBaseline />
        <Header />
        <main>
          <Container className={classes.cardGrid} maxWidth="xl">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Character card={card} />
              ))}
            </Grid>
          </Container>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
