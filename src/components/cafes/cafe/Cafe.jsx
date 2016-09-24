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
        console.log('xxxxxxxx');
        axios.get(`http://localhost:3001/cafe/${this.props.params.cafeName}`)
        .then(response => {
            this.setState({ cafe: response.data });
        });
    }

    splitContent(toSplit) {
        return toSplit.split('<br/>');
    }

    buildLines(toBuild) {
        return this.splitContent(toBuild).map((line, index) => <span key={index}>{line}<br/></span>);
    }

    buildParagraphs(toBuild) {
        return this.splitContent(toBuild).map((line, index) => <p key={index}>{line}</p>);
    }

    render() {
        return this.state.cafe ? (
            <Grid className="cafe">
                <Row>
                    <Col md={3} mdOffset={1} className="sidebar">
                        <h1>{this.state.cafe.title}</h1>
                        <p className="banner">{this.state.cafe.banner}</p>
                        <p className="contact">{this.buildLines(this.state.cafe.contact)}</p>
                        <p className="address">{this.buildLines(this.state.cafe.address)}</p>
                        <p className="opening-hours">{this.buildLines(this.state.cafe.openingHours)}</p>
                    </Col>
                    <Col md={7}>
                        <img src={`static/images/${this.state.cafe.image}`} />
                        <h3>{this.state.cafe.blurb}</h3>
                        {this.buildParagraphs(this.state.cafe.main)}
                    </Col>
                </Row>
            </Grid>
        ) : null;
    }
}
