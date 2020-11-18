import React, {useState, useEffect } from 'react'
import { FormControl, InputGroup, Button, ListGroup } from 'react-bootstrap';
import { BsSearch, BsPersonPlusFill, BsX } from 'react-icons/bs';
import ResourceService from '../services/Resource.js';

export default function AddUserGroup(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [display, setDisplay] = useState(false);
  const [users, setUsers] = useState([]);

  const group = props.group;

  useEffect(() => {
    ResourceService.searchUsers(searchQuery).then(users => {
      const filteredUsers = users.filter(user => {
        return !(user in group);
      });
      setUsers(filteredUsers);
    });
  }, [searchQuery]);
  
  function queryChanged(event) {
    const query = event.target.value;

    setDisplay(query !== "");
    setSearchQuery(query);
  }
  
  function onFocus() {
    setDisplay(searchQuery !== "");
  }
  
  function onClose() {
    setDisplay(false);
  }

  useEffect(() => {}, [searchQuery, display]);
  
  return (
    <div className="d-flex align-items-center">
      <BsPersonPlusFill className="mr-3"/>
      <ListGroup onFocus={onFocus} className="w-100">
        <ListGroup.Item className="p-0">
          <InputGroup>
            <FormControl type="text" placeholder="Ajouter un utilisateur" onChange={queryChanged} />
            {display &&
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={onClose}><BsX /></Button>
              </InputGroup.Append>
            }
          </InputGroup>
        </ListGroup.Item>
        {display && users.map((user) => {
            return (<ListGroup.Item key={user.id}
                className="small d-flex justify-content-between">
                  <div>{user.firstname + " " + user.lastname}</div>
              </ListGroup.Item>);
        })}
      </ListGroup>
    </div>
  );
}
