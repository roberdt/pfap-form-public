import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


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
    };
}

export default Pfapcontainer;