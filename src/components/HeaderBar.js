import React from 'react'
import { Navbar } from 'react-bootstrap'
import ProfileBar from './ProfileBar.js';

export default function HeaderBar() {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="/">Compety</Navbar.Brand>
      <ProfileBar />
    </Navbar>
  );
}
