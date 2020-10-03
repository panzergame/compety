import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <Form onSubmit={onSubmit} className="d-flex flex-column">
        <Form.Group>
          <Form.Label>Adresse email</Form.Label>
          <Form.Control required type="email" placeholder="Entrez votre adresse email" onChange={(e) => setEmail(e.target.value) }/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control required type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Control required type="password" placeholder="Confirmation mot de passe" onChange={(e) => setConfirmPassword(e.target.value)} isInvalid={password && confirmPassword && confirmPassword !== password}/>
          <Form.Control.Feedback type="invalid" tooltip>
            Mot de passe différent
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Inscription
        </Button>
      </Form>
    </div>
  );
}
