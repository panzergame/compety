import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import AuthService from '../services/Auth.js';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [dayofbirth, setDayofbirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');

  function onSubmit(e) {
    e.preventDefault();
    AuthService.register(email, firstname, lastname, dayofbirth, password, role).then(() => {
      window.location.href = '/'
    });
  }
  
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <Form onSubmit={onSubmit} className="d-flex flex-column m-auto">
        <Form.Group>
          <div className="d-flex">
            <Form.Check
              type="radio"
              label="Étudiant"
              name="formHorizontalRadios"
              id="student"
              className="m-auto"
              defaultChecked={true}
              onChange={e => setRole('student')}
            />
            <Form.Check
              type="radio"
              label="Enseignant"
              name="formHorizontalRadios"
              id="teacher"
              className="m-auto"
              onChange={e => setRole('teacher')}
            />
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Adresse email</Form.Label>
          <Form.Control required type="email" placeholder="Entrez votre adresse email"
            onChange={(e) => setEmail(e.target.value) }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Prénom</Form.Label>
          <Form.Control required type="name" placeholder="Entrez votre prénom"
            onChange={(e) => setFirstname(e.target.value) }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <Form.Control required type="name" placeholder="Entrez votre nom"
            onChange={(e) => setLastname(e.target.value) }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date de naissance</Form.Label>
          <Form.Control type="date" name="dayofbirth" placeholder="Date of Birth"
            onChange={(e) => setDayofbirth(e.target.value) }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control required type="password" placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Control required type="password" placeholder="Confirmation mot de passe"
            onChange={(e) => setConfirmPassword(e.target.value)}
            isInvalid={password && confirmPassword && confirmPassword !== password}
          />
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
