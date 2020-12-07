import React, {useState, useEffect } from 'react'
import { FormControl, InputGroup, Button, ListGroup } from 'react-bootstrap';
import { BsSearch, BsArrowReturnLeft, BsX } from 'react-icons/bs';
import AuthService from '../services/Auth.js';

export default function SearchCompetencyBar(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [display, setDisplay] = useState(false);

  const user = AuthService.user;
  
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
  
  function onClose() {
//     console.log("blur");
    setDisplay(false);
  }

  useEffect(() => {}, [searchQuery, display]);
  
  return (
    <>
      <ListGroup onFocus={onFocus}>
        <ListGroup.Item className="p-0">
          <InputGroup>
            <FormControl type="text" placeholder="Rechercher" onChange={queryChanged} />
            {display &&
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={onClose}><BsX /></Button>
              </InputGroup.Append>
            }
          </InputGroup>
        </ListGroup.Item>
        {display && 
          <>
            {user &&
              <ListGroup.Item action
                href={"/competency/search/?query=" + searchQuery + "&profileId=" + user.id}
                className="small d-flex justify-content-between">
                  <div>Rechercher {searchQuery} dans mes compétences</div>
                  <BsArrowReturnLeft />
              </ListGroup.Item>
            }
            <ListGroup.Item action 
              href={"/competency/search/?query=" + searchQuery}
              className="small d-flex justify-content-between">
                <div>Rechercher {searchQuery} dans toutes les compétences</div>
                <BsArrowReturnLeft />
            </ListGroup.Item>
          </>
        }
      </ListGroup>
    </>
  );
}
