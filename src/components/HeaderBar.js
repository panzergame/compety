import React, { Component } from 'react'
import { BsFillBellFill, BsFillChatDotsFill } from 'react-icons/bs';
import { Nav, Navbar } from 'react-bootstrap'
import ProfileName from './ProfileName.js';

class HeaderBar extends Component {
  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand href="home">Compety</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <ProfileName />
          <Nav.Link href="notifications"><BsFillBellFill /></Nav.Link>
          <Nav.Link href="messages"><BsFillChatDotsFill /></Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderBar
