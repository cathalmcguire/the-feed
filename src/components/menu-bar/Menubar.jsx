import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import { withRouter, Link } from 'react-router';


class Menubar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cafes: {}
        };
    }

    componentWillMount() {
        axios.get('http://localhost:3001/cafes').then(response => {
            this.setState({ cafes: response.data });
        });
    }

    goToLink(link) {
        this.props.router.push(link);
    }

    renderCafes() {
        return Object.keys(this.state.cafes).map((key, index) => {
            const link = `cafes/${this.state.cafes[key].link}`;
            return (
                <NavItem key={index} onClick={this.goToLink.bind(this, link)}>
                    {this.state.cafes[key].title}
                </NavItem>
            );
        });
    }

    render() {

        return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">The Feed</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavDropdown title="Cafes" id="basic-nav-dropdown">
                            {this.renderCafes()}
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
        );
    }
}

export default withRouter(Menubar);
