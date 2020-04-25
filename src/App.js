import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MarvelCharacters from './features/marvelCharacters/pages'
import CharacterDetail from './features/marvelCharacters/pages/CharacterDetail'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/detail">
            <CharacterDetail />
          </Route>
          <Route path="/">
            <MarvelCharacters />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
