import React, {Component} from 'react';

class Pfapfooter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const footerHTML = {
            position: 'fixed',
            left: '0',
            bottom: '0',
            width: '100%',
            backgroundColor: '#0074C8',
            clear: 'both',
            textAlign: 'center',
            color: 'white',
        };
        const footerStyle = {
            fontSize: 'small',
            fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
            color: 'white',
            fontWeight: 'bold',
        };
        return (
            <div style={footerHTML}>
                <br/>
                <span style={footerStyle}>Copyright &#169; 2014 - 2020 SafetyNetAccess.org &trade;   . All Rights Reserved.</span>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Pfapfooter;
