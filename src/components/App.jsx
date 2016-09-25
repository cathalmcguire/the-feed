import React from 'react';
import Menubar from './menu-bar/Menubar';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import './style/app.less';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        axios.get('http://localhost:3001').then(response => {
            this.setState({ response: response.data });
        });
    }

    splitContent(toSplit) {
        return toSplit.split('<br/>');
    }

    buildParagraphs(toBuild) {
        return this.splitContent(toBuild).map((line, index) => <p key={index}>{line}</p>);
    }

    render() {
        return (
            <div className="home-wrapper">
                <Menubar />
                <Row className="image-row">>
                    <img src="static/images/coffee.jpeg" />
                </Row>
                <Row>
                    <Col xs={12}>
                        {this.state.response ? this.buildParagraphs(this.state.response.main) : null}
                    </Col>
                </Row>

                {this.props.children}
            </div>
        );
    }
}
