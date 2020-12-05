import React from 'react'
import { useParams } from "react-router-dom";

import { Button, Card } from 'react-bootstrap';

import AuthService from '../services/Auth.js';
import BreadCrumbService from '../services/BreadCrumb.js';

export default function ProfilePage() {
  BreadCrumbService.push(1, 'Profile', '', '/profile');
  
  const user = AuthService.user;

  function logout(e) {
    console.log("logout");
    AuthService.logout()
  }
  
  if (user) {
    return (
      <Card>
        <Card.Title>Mon compte</Card.Title>
        <Card.Body>
          <div>{user.login}</div>
          <div>{user.role}</div>
          <Button onClick={logout} href='/'>Se déconnecter</Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div></div>
  );
}
