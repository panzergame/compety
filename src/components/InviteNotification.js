import React, {useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import { BsSearch, BsArrowReturnLeft, BsX, BsList, BsPeopleFill, BsPersonDashFill, BsPersonPlusFill } from 'react-icons/bs';

export default function InviteNotification(props) {
  const notification = props.notification;

  function onAccept() {
    
  }

  function onDecline() {
    
  }
  
  return (
    <Card className="w-100">
      <Card.Body>
        <Card.Title>Invitation au groupe {notification.title} </Card.Title>
        <Card.Subtitle>Le {new Date(notification.date).toLocaleString()}</Card.Subtitle>
        <Button onClick={onAccept}>Accepter</Button>
        <Button onClick={onDecline}>Refuser</Button>
      </Card.Body>
    </Card>
  );
}
