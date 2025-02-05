import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

class Pfapcontainer extends Component {
    render() {
        const containerHTML = {
            borderStyle: 'dashed',
        };
        return (
            <div style={containerHTML}>
                <Container>
                    <Typography>
                        PUT YOUR CONTAINER STUFF HERE
                    </Typography>
                </Container>
            </div>
        );
    }
}

export default Pfapcontainer;