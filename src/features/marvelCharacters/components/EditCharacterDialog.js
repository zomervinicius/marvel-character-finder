import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import React from 'react'

export function EditCharacterDialog({
  open,
  setCharacterName,
  characterName,
  setOpen
}) {
  const [inputCharacterName, setInputCharacterName] = React.useState('')

  React.useEffect(() => {
    setInputCharacterName(characterName)
  }, [characterName])

  const handleClose = () => {
    setOpen(false)
  }

  const handleEdit = () => {
    setCharacterName(inputCharacterName)
    setOpen(false)
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
    >
      <DialogTitle id="form-dialog-title">Edit character name</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          type="text"
          fullWidth
          label="Name"
          value={inputCharacterName}
          onChange={(e) => setInputCharacterName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleEdit} color="primary">
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  )
}
