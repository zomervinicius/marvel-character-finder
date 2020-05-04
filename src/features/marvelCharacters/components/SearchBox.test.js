import { screen, wait } from '@testing-library/react'
import axios from 'axios'
import React from 'react'
import { renderWithRedux } from '../utils/test-helpers'
import { allCharactersResponse } from '../utils/test-mock'
import SearchBox from './SearchBox'

jest.mock('axios')
const mockedAxios = axios

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
    search: '/'
  }),
  useHistory: () => ({
    push: jest.fn()
  })
}))

test('test fetch without params', async () => {
  mockedAxios.get.mockResolvedValueOnce({
    status: 200,
    data: allCharactersResponse
  })
  jest.useFakeTimers()

  const { mockStore } = renderWithRedux(<SearchBox />)

  jest.runAllTimers()
  // Normally we would wait for an element to show up
  // https://github.com/testing-library/react-testing-library#complex-example
  await wait(() => null, { timeout: 500 })
  // expect(axios.get).toHaveBeenCalledTimes(1)
  // const parsedQueryString = queryString.parse(location.search)

  // await mockStore
  //   .dispatch(fetchCharactersByParams(parsedQueryString))
  //   .then(() => {
  //     // return of async actions
  //     expect(mockStore.getActions()[0].type).toEqual(
  //       fetchCharactersByParams.pending.type
  //     )
  //     expect(mockStore.getActions()[1].type).toEqual(
  //       fetchCharactersByParams.fulfilled.type
  //     )
  //     expect(mockStore.getActions()[1].payload).toEqual(allCharactersResponse)
  //   })

  const input = expect(screen.getByPlaceholderText('Search the character...'))
  expect(input.toBeInTheDocument())

  //   fireEvent.change(input, {
  //     target: { value: 'new content' }
  //   })
  //   expect(input.value).toBe('a')
})
