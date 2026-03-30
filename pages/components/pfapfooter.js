import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useMessage } from '../../context/MessageContext';

export default function Pfapfooter() {
    const { message, setMessage } = useMessage();

    const footerHTML = {
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
    const footerStyle = {
        fontSize: 'small',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        color: 'white',
        fontWeight: 'bold',
    };

    const open = Boolean(message && message.length > 0);

    const handleClose = (event, reason) => {
        // ignore clickaway reason if you want Snackbar to persist until timeout or explicit close
        // here we clear message for any close reason
        setMessage('');
    };

    return (
        <>
            <div style={footerHTML}>
                <br/>
                <span style={footerStyle}>© 2026 SafetyNetAccess.org™ LLC. All Rights Reserved.</span>
                <br/>
                <br/>
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
