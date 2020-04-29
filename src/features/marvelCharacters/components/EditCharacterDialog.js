import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
import React, { useState } from 'react'

export function EditCharacterDialog({
  open,
  setCharacterName,
  characterName,
  setOpen
}) {
  const [inputCharacterName, setInputCharacterName] = React.useState('')
  const [showAlert, setShowAlert] = useState(false)

  React.useEffect(() => {
    setShowAlert(false)
    setInputCharacterName(characterName)
  }, [characterName])

  const handleClose = () => {
    setOpen(false)
  }

  const handleEdit = () => {
    if (inputCharacterName.length > 0) {
      setCharacterName(inputCharacterName)
      setOpen(false)
    } else {
      setShowAlert(true)
    }
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
    >
      <DialogTitle id="form-dialog-title">Edit character name</DialogTitle>
      {showAlert && <Alert severity="error">The name field is required!</Alert>}
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          requiredlocal
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
