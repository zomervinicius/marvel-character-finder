import { render, screen } from '@testing-library/react'
import apiErrorImage from 'assets/images/marvel-api-error.jpg'
import React from 'react'
import { CharactersError } from './CharactersError'

test('test img and error message shown', () => {
  const errorMessage = 'An error ocurred...'
  render(
    <CharactersError errorMessage="An error ocurred..." img={apiErrorImage} />
  )
  expect(screen.getByText(errorMessage)).toBeInTheDocument()
  expect(screen.getByAltText('error-img')).toBeInTheDocument()
})
