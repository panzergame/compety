import React, { useState } from 'react';
import { BsFillPersonCheckFill, BsBuilding, BsGraphUp, BsChevronCompactRight, BsSearch, BsPeopleFill} from 'react-icons/bs';

import { Nav } from 'react-bootstrap'
import { Swipeable } from 'react-swipeable'
import Sidebar from "react-sidebar";

export default function SideNav(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
      <Sidebar className="d-flex w-100"
        sidebar={
          <div className="d-flex h-100">
          <Nav navbar className="d-flex flex-column align-self-center">
              <Nav.Link href="/profile/competency/"><BsFillPersonCheckFill /></Nav.Link>
              <Nav.Link href="/competency/search/"><BsSearch /></Nav.Link>
              <Nav.Link href="/profile/group"><BsPeopleFill /></Nav.Link>
          </Nav>
          </div>
        }
        touch={true}
        touchHandleWidth={0}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        styles={{ sidebar: { background: "white", position: "fixed" } }}
      >
      {!sidebarOpen &&
        <div className="d-flex side-bar-zone position-fixed">
          <Swipeable className="d-flex align-self-center side-bar-button" onSwipedRight={ (event) => { setSidebarOpen(true) } } >
            <BsChevronCompactRight className="side-bar-button" size={32}/>
          </Swipeable>
        </div>
      }
        {props.children}
      </Sidebar>
  )
//   return (<>{props.children}</>);
}
