import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30px'
  },
  input: {
    width: '50%',
    minWidth: '222px',
    padding: '12px 24px',
    backgroundColor: '#e8e8e8',
    transition: ['transform 250ms ease-in-out', 'all 250ms ease-in-out'],
    fontSize: '14px',
    lineHeight: '18px',
    color: 'black',
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '23px 23px',
    backgroundPosition: '97% center',
    // borderRadius: '50px',
    border: '1px solid black',
    backfaceVisibility: 'hidden',
    textTransform: 'uppercase',
    transformStyle: 'preserve-3d',
    '&::placeholder': {
      color: 'color(white a(0.2))',
      letterSpacing: '1.5px'
    },
    '&:hover,  &:focus': {
      padding: '12px 0',
      outline: '0',
      border: '1px solid transparent',
      borderBottom: '1px solid white',
      borderRadius: '0',
      backgroundPosition: '100% center'
    }
  }
}))

export default function SearchBox() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <input
        type="search"
        defaultValue=""
        className={classes.input}
        placeholder="Search the hero..."
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  )
}
