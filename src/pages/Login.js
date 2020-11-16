import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import AuthService from '../services/Auth.js';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function onSubmit(e) {
    e.preventDefault();
    AuthService.login(email, password).then(() => {
      window.location.href = '/'
    });
  }
  
  return (
    <div className="w-100 h-100 d-flex justify-content-center">
      <Form onSubmit={onSubmit} className="d-flex flex-column m-auto">
        <Form.Group>
          <Form.Label>Adresse email</Form.Label>
          <Form.Control type="email" placeholder="Entrez votre adresse email" onChange={(e) => setEmail(e.target.value) } defaultValue={email}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} defaultValue={password}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Connexion
        </Button>
        <a href="register" className="small">Pas encore inscrit ?</a>
      </Form>
    </div>
  );
}
