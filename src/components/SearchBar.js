import React, {useState, useEffect } from 'react'
import { FormControl, Button, ListGroup } from 'react-bootstrap';
import { BsSearch, BsArrowReturnLeft } from 'react-icons/bs';

export default function HeaderBar(props) {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [display, setDisplay] = useState(false);
  
  function queryChanged(event) {
    const query = event.target.value;

//     console.log(query);
    setDisplay(query !== "");
    setSearchQuery(query);
  }
  
  function onFocus() {
    setDisplay(searchQuery !== "");
//     console.log("focus");
  }
  
  function onBlur() {
//     console.log("blur");
    setDisplay(false);
  }

  useEffect(() => {}, [searchQuery, display]);
  
  return (
    <>
      <ListGroup>
        <ListGroup.Item className="p-0">
          <FormControl type="text" placeholder="Rechercher" onChange={queryChanged} onFocus={onFocus} onBlur={onBlur}/>
        </ListGroup.Item>
        {display && 
          <>
            <ListGroup.Item className="small d-flex justify-content-between">
              <a href="/profile/competency/search/">Rechercher {searchQuery} dans mes compétences</a>
              <BsArrowReturnLeft />
            </ListGroup.Item>
            <ListGroup.Item className="small d-flex justify-content-between">
              <a href="/competency/search/">Rechercher {searchQuery} dans toutes les compétences</a>
              <BsArrowReturnLeft />
            </ListGroup.Item>
          </>
        }
      </ListGroup>
    </>
  );
}
