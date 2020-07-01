import React, {Component} from "react";
import Pfapappbar from './components/pfapappbar';
import Pfapfooter from './components/pfapfooter';
import Pfapcontainer from "./components/pfapcontainer";

class App extends Component {

    render() {
        return (
            <div>
                <Pfapappbar/>
                <Pfapcontainer/>
                <Pfapfooter/>
            </div>
        );
    }

}

export default App;