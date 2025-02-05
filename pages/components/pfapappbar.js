import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Pfapmenulist from './nav/pfapmenulist';

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

const divStyle = {
    root: {
        flexGrow: 1,
    },
};

class Pfapappbar extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div style={divStyle.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                PFAP Form
                            </Typography>
                            <Pfapmenulist />
                        </Toolbar>
                    </AppBar>
                </div>
            </ThemeProvider>
        );
    }
}

export default Pfapappbar;