import React, {Component} from 'react';
import Pfapappbar from './components/pfapappbar';
import Pfapfooter from './components/pfapfooter';

class App extends Component {

    render() {
        return (
            <div>
                <Pfapappbar/>

                <Pfapfooter/>
            </div>
        );
    }

}

export default App;
