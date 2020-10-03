import React from 'react'
import HeaderBar from './HeaderBar.js';
import SideNav from './SideNav.js';

// Ajout une side nav et une header bar autour d'une page
export default function NavWrapper(props) {
  return (
    <SideNav>
      <header>
        <HeaderBar />
      </header>
      {props.children}
    </SideNav>
  );
}
