import {useState} from 'react';
import {Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip, Button } from '@mui/material';
import { Settings, Logout, Lock} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import Login from './user/Login';
import Profile from './user/Profile';
import AccountSettings from './user/settings/AccountSettings';

export const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const {currentUser, setModal, logout, setAlert} = useAuth()

  const openLogin = () => {
    setModal({isOpen: true, title: 'Login', content: <Login/>})
  }

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      setAlert({isAlert: true, severity: 'error', message: error.message, timeout: 8000, location: 'main'})
      console.log(error)
    }
  }
   
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {!currentUser ? <Button startIcon={<Lock/>} onClick={openLogin}>Login</Button> : (
            <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }} src={currentUser?.photoURL}>
                {currentUser?.displayName?.charAt(0)?.toUpperCase() || currentUser?.email?.charAt(0)?.toUpperCase()}
              </Avatar>
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => setModal({isOpen: true, title: 'Update Profile', content: <Profile/>})}>
          <Avatar src={currentUser?.photoURL}/> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => setModal({isOpen: true, title: 'Account Settings', content: <AccountSettings/>})}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}