import { Dialog, DialogTitle, IconButton } from '@mui/material'
import { useAuth } from '../context/AuthContext'
import { Close } from '@mui/icons-material'
  
const Modal = () => {
  const {modal, setModal} = useAuth()

  const handleClose = () => {
    setModal({})
  }

  return (
    <Dialog open={modal.isOpen} onClose={handleClose}>
      <DialogTitle>
        {modal.title}
        <IconButton
          aria-label='Close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <Close/>
        </IconButton>
      </DialogTitle>
      {modal.content}
    </Dialog>
  )
}

export default Modal