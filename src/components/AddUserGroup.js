import React, {useState, useEffect } from 'react'
import { FormControl, InputGroup, Button, ListGroup } from 'react-bootstrap';
import { BsSearch, BsPersonPlusFill, BsX } from 'react-icons/bs';
import ResourceService from '../services/Resource.js';
import GroupService from '../services/Group.js';

export default function AddUserGroup(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [display, setDisplay] = useState(false);
  const [users, setUsers] = useState([]);

  const group = props.group;

  useEffect(() => {
    ResourceService.searchUsers(searchQuery).then(users => {
      const membersId = group.members.map(user => user.id);
      const filteredUsers = users.filter(user => !membersId.includes(user.id));
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
  
  function inviteUser(user) {
    props.onInvite(user);
  }

  useEffect(() => {}, [searchQuery, display]);
  
  return (
    <div className="d-flex align-items-center">
      <ListGroup onFocus={onFocus} className="w-100">
        <ListGroup.Item className="p-0">
          <InputGroup>
            <FormControl type="text" placeholder="Inviter un utilisateur" onChange={queryChanged} />
            {display &&
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={onClose}><BsX /></Button>
              </InputGroup.Append>
            }
          </InputGroup>
        </ListGroup.Item>
        {display && users.map((user) => {
            return (<ListGroup.Item key={user.id}
                className="d-flex justify-content-between p-0 align-items-center">
                  <div>{user.firstname + " " + user.lastname}</div>
                  <Button onClick={() => inviteUser(user)}>
                    <BsPersonPlusFill />
                  </Button>
              </ListGroup.Item>);
        })}
      </ListGroup>
    </div>
  );
}
