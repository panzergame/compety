import React from 'react'
import HeaderBar from './HeaderBar.js';
import BreadCrumb from './BreadCrumb.js';
import SideNav from './SideNav.js';

// Ajout une side nav et une header bar autour d'une page
export default function NavWrapper(props) {
  return (
    <SideNav>
      <div className="d-flex flex-column flex-grow-1 h-100">
        <HeaderBar />
        <BreadCrumb />
        <div className="d-flex flex-column flex-grow-1">
          {props.children}
        </div>
      </div>
    </SideNav>
  );
}
