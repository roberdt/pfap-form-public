import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Pfapmenulist from './nav/pfapmenulist';
import { Box } from '@mui/system';

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

class Pfapappbar extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Pfapmenulist />
                            <Typography variant="h6" color="inherit">
                                PFAP Form
                            </Typography>                            
                        </Toolbar>
                    </AppBar>
                </Box>
            </ThemeProvider>
        );
    }
}

export default Pfapappbar;