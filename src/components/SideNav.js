import React, { useState } from 'react';
import { BsFillPersonCheckFill, BsBuilding, BsGraphUp } from 'react-icons/bs';

import { Nav } from 'react-bootstrap'

import Sidebar from "react-sidebar";

export default function SideNav(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
      <Sidebar
        sidebar={
          <div className="d-flex h-100">
          <Nav navbar className="d-flex flex-column align-self-center">
              <Nav.Link href="competencies"><BsFillPersonCheckFill /></Nav.Link>
              <Nav.Link href="companies"><BsBuilding /></Nav.Link>
              <Nav.Link href="stats"><BsGraphUp /></Nav.Link>
          </Nav>
          </div>
        }
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        styles={{ sidebar: { background: "white", position: "fixed" } }}
      >
        <div className="h-100 position-fixed d-flex">
          <div draggable={true} onDragStart={() => setSidebarOpen(true)} className="side-bar-button d-flex align-self-center bg-dark">
          </div>
        </div>
        {props.children}
      </Sidebar>
  )
}
