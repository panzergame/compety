import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

import AuthService from '../services/Auth.js';
import GroupService from '../services/Group.js';

export default function GroupCreatePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    console.log(title, description);
    GroupService.create(title, description).then(group => {
      console.log(group);
    });
  }
  
  return (
    <>
      <Form onSubmit={onSubmit} className="d-flex flex-column m-auto">
        <Form.Group>
          <Form.Label>Titre</Form.Label>
          <Form.Control required type="name" placeholder="Entrez le titre du groupe" onChange={(e) => setTitle(e.target.value) } defaultValue={title}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="name" placeholder="Entrez une description du groupe" onChange={(e) => setDescription(e.target.value)} defaultValue={description}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Créer
        </Button>
      </Form>
    </>
  );
}
