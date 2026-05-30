import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, AppBar, Box, Snackbar, Toolbar, Typography } from '@mui/material';
import Pfapmenulist from './nav/pfapmenulist';
import { useMessage } from '@/context/MessageContext';
import { useAuth } from '@/context/AuthContext';

const theme = createTheme({
  palette: {
    primary: {
      light: '#338fd3',
      main: '#0074C8',
      dark: '#00518c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


function Pfapappbar() {
  const { message, setMessage } = useMessage();
  const { userId } = useAuth();
  const open = Boolean(message && message.length > 0);

  const handleClose = () => {
    setMessage('');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Pfapmenulist />
            <Typography variant="h6" color="inherit">
              PFAP Form
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            {userId && (
              <Typography variant="body2" color="inherit">
                Logged In: {userId}
              </Typography>
            )}
          </Toolbar>
        </AppBar>

        {/* Top snackbar for success messages */}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}

export default Pfapappbar;

