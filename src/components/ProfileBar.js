import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { BsFillBellFill, BsFillChatDotsFill } from 'react-icons/bs';

import AuthService from '../services/Auth.js';

export default function ProfileName() {
  const user = AuthService.user;

  if (user) {
    return (
      <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/profile">{user.firstname + ' ' + user.lastname}</Nav.Link>
          <Nav.Link href="/notifications"><BsFillBellFill /></Nav.Link>
          <Nav.Link href="/messages"><BsFillChatDotsFill /></Nav.Link>
      </Navbar.Collapse>
    );
  }
  else {
    return (
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="/login">Se connecter</Nav.Link>
      </Navbar.Collapse>
    );
  }
}
