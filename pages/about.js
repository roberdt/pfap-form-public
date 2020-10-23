import React from "react";
import Pfapappbar from './components/pfapappbar';
import Pfapfooter from './components/pfapfooter';
import Container from "@material-ui/core/Container";


function About() {
    const divStyle = {
        myfont: {
            color: '#00518c',
        },
    };

    return(
            <div>
                <Pfapappbar/>
                    <Container >
                        <h1 className="dispaly-4" style={divStyle.myfont}>Patient Financial Assistance Forms</h1>
                        <p className="lead" style={divStyle.myfont}>Web application for patients to submit PFAP Applications to hospitals.</p>
                        <p className="text-secondary" style={divStyle.myfont}>Version 1.0.0</p>
                    </Container>
                <Pfapfooter />
            </div>
       );
}

export default About;
