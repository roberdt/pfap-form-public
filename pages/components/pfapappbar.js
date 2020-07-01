import React, {Component} from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Pfapmenulist from './nav/pfapmenulist';

const theme = createMuiTheme({
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
    menuButton: {
        marginRight: theme.spacing(0),
    },
};

class Pfapappbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div style={divStyle.root}>
                    <AppBar position="static" color="primary">
                        <Toolbar variant="dense">
                            <Pfapmenulist/>
                            <Typography variant="h6">
                                Patient Financial Assistance Forms
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
            </ThemeProvider>
        );
    }
}

export default Pfapappbar;