import React, {useState, useEffect } from 'react'
import { Button, Card, ListGroup, Dropdown } from 'react-bootstrap';
import { BsSearch, BsArrowReturnLeft, BsX, BsList, BsPeopleFill, BsPersonDashFill, BsPersonPlusFill, BsFillPersonCheckFill, BsFillPersonLinesFill } from 'react-icons/bs';
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
  
  function onInvite(user) {
    GroupService.invite(group, user).then(() => 
      ResourceService.group(props.id).then(setGroup)
    );
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

        <div className="d-flex align-items-center my-3">
          <BsFillPersonLinesFill className="mr-3"/>
          <div>Membres</div>
        </div>

        <ListGroup>
        {group.members.map(user => {
          return (
            <ListGroup.Item className="d-flex align-items-center" key={user.id}>
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

        <hr />
        {user && user.id == group.creator &&
          <div>
            <div>
              <div className="d-flex align-items-center my-3">
                <BsPersonPlusFill className="mr-3"/>
                <div>Invitations</div>
              </div>
        
              <ListGroup>
              {group.invits.map(user => {
                return (
                  <ListGroup.Item className="d-flex align-items-center" key={user.id}>
                    <div className="mr-auto">{user.firstname + " " + user.lastname}</div>
                  </ListGroup.Item>
                );
              })}
              </ListGroup>
              <AddUserGroup group={group} onInvite={onInvite}/>
            </div>
            
            <hr />

            <div>
              <Button href={'/group/verify?groupId=' + group.id} className="d-flex align-items-center my-3">
                <BsFillPersonCheckFill className="mr-3"/>
                <div>Vérifier des compétences</div>
              </Button>
            </div>
          </div>
        }
      </Card.Body>
    </Card>
  );
}
