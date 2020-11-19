import React, {useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import { BsSearch, BsArrowReturnLeft, BsX, BsList, BsPeopleFill, BsPersonDashFill, BsPersonPlusFill } from 'react-icons/bs';

import GroupService from '../services/Group.js';


export default function InviteNotification(props) {
  const [accepted, setAccepted] = useState(false);

  const notification = props.notification;

  function onAccept() {
    // La notification comporte les infos du groupe aussi
    GroupService.acceptInvite(notification).then(() => setAccepted(true));
  }
  
  return (
    <Card className="w-100">
      <Card.Body>
        <Card.Title>Invitation au groupe {notification.title} </Card.Title>
        <Card.Subtitle>Le {new Date(notification.date).toLocaleString()}</Card.Subtitle>
        {(accepted) ?
          (<Button disabled>Accepté</Button>)
          : (<Button onClick={onAccept}>Accepter</Button>)
        }
      </Card.Body>
    </Card>
  );
}
