import React from 'react';
import { render } from 'react-dom';
import Cafe from './components/cafes/cafe/Cafe';
import Cafes from './components/cafes/Cafes';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, browserHistory } from 'react-router';

class Root extends React.Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <Route path="cafes/" component={Cafes}>
                            <Route path=":cafeName" component={Cafe}/>
                        </Route>
                    </Route>
                </Router>
            </div>
        );
    }
}

render(<Root/>, document.getElementById('app'));
