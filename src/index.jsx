import React from 'react';
import { render } from 'react-dom';
import Cafe from './components/cafes/Cafe';


class App extends React.Component {
    render() {
        return (
            <div>
                <Cafe />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
