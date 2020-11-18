import React, {useState, useEffect } from 'react'
import { Button, Card, ListGroup, Dropdown } from 'react-bootstrap';
import { BsSearch, BsArrowReturnLeft, BsX, BsList, BsPeopleFill, BsPersonDashFill } from 'react-icons/bs';
import ResourceService from '../services/Resource.js';
import AuthService from '../services/Auth.js';
import GroupService from '../services/Group.js';
import AddUserGroup from './AddUserGroup.js';

export default function Group(props) {
  const [isLoading, setLoading] = useState(true);
  const [group, setGroup] = useState();
  
  const user = AuthService.user;

  useEffect(() => {
    ResourceService.group(props.id).then(group => {
      setGroup(group);
      setLoading(false);
    });
  }, [props.id]);

  function removeUser() {
    console.log("remove");
    GroupService.removeUser(group, user).then(setGroup);
  }

  if (isLoading) {
    return <div>Chargement... {props.id}</div>;
  }

  return (
    <Card className="w-100 h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-center w-100">
          <BsPeopleFill/>
          <div className="mx-auto">{ group.title }</div>
        </Card.Title>
        
        <hr />
        
        <Card.Text>{ group.description }</Card.Text>
        
        <hr />

        <div className="d-flex align-items-center">
          <BsPeopleFill className="mr-3"/>
          <ListGroup className="w-100">
          {group.members.map(user => {
            return (
              <ListGroup.Item className="d-flex align-items-center p-1" key={user.id}>
                <div className="mr-auto">{user.firstname + " " + user.lastname}</div>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                  </Dropdown.Toggle>
                  
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={removeUser}>
                      <BsPersonDashFill className="mr-3"/>
                      <span>Retirer</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ListGroup.Item>
            );
          })}
          </ListGroup>
        </div>
        <AddUserGroup group={group}/>
      </Card.Body>
    </Card>
  );
}
