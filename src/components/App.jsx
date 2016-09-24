import React from 'react';
import Menubar from './menu-bar/Menubar';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Menubar />
                {this.props.children}
            </div>
        );
    }
}
