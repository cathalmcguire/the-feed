import React from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import './style/cafe.less';

export default class Cafe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        axios.get('http://localhost:3001/thefumbally').then(response => {
            this.setState({ cafe: response.data });
        });
    }

    render() {
        return this.state.cafe ? (
            <Grid className="cafe">
                <Row>
                    <Col md={3} mdOffset={1} className="sidebar">
                        <h1>{this.state.cafe.title}</h1>
                        <p className="banner">{this.state.cafe.banner}</p>
                        <p className="contact"
                            dangerouslySetInnerHTML={{ __html: this.state.cafe.contact }}/>
                        <p className="address"
                            dangerouslySetInnerHTML={{ __html: this.state.cafe.address }}/>
                        <p className="opening-hours"
                            dangerouslySetInnerHTML={{ __html: this.state.cafe.openingHours }}/>
                    </Col>
                    <Col md={7}>
                        <h3>{this.state.cafe.blurb}</h3>
                        <div dangerouslySetInnerHTML={{ __html: this.state.cafe.main }}/>
                    </Col>
                </Row>
            </Grid>
        ) : null;
    }
}
