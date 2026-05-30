import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useMessage } from '@/context/MessageContext';

export default function Pfapfooter() {
  const { message, setMessage } = useMessage();

  const footerHTML: React.CSSProperties = {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: '#0074C8',
    clear: 'both',
    textAlign: 'center',
    color: 'white',
    zIndex: 1200,
  };

  const footerStyle: React.CSSProperties = {
    fontSize: 'small',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    color: 'white',
    fontWeight: 'bold',
  };

  const open = Boolean(message && message.length > 0);

  const handleClose = () => {
    setMessage('');
  };

  return (
    <>
      <div style={footerHTML}>
        <br />
        <span style={footerStyle}>© 2026 SafetyNetAccess.org™ LLC. All Rights Reserved.</span>
        <br />
        <br />
      </div>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

