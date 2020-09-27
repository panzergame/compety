import React from 'react'
import { BsFillBellFill, BsFillChatDotsFill } from 'react-icons/bs';
import { Nav, Navbar } from 'react-bootstrap'
import ProfileName from './ProfileName.js';

export default function HeaderBar() {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="/">Compety</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <ProfileName />
        <Nav.Link href="notifications"><BsFillBellFill /></Nav.Link>
        <Nav.Link href="messages"><BsFillChatDotsFill /></Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
