import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
  import GoogleAuth from './GoogleAuth';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isSignedIn } = this.props;
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/" style={{ color: "white"}}><strong>RE-VENTS</strong></NavbarBrand>
          <NavbarToggler onClick={this.toggle} style={{ backgroundColor: "floralwhite"}} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/eventlist" style={{ color: "white"}}><strong>EventList</strong></NavLink>
              </NavItem>
              <NavItem>
                { isSignedIn ? <NavLink href="/addEvent" style={{ color: "white"}}><strong>AddEvent</strong></NavLink> : null}
              </NavItem>
              <NavItem>
                <GoogleAuth />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}