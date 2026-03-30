import React, {Component} from 'react';
import Pfapappbar from './components/pfapappbar';
import Pfapfooter from './components/pfapfooter';

class App extends Component {

    componentDidMount() {
        // Log the API base to the browser console for quick verification
        if (typeof window !== 'undefined') {
            // eslint-disable-next-line no-console
            console.log('NEXT_PUBLIC_API_BASE =', process.env.NEXT_PUBLIC_API_BASE);
        }
    }

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
