import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { ListGroup, Card, Button } from 'react-bootstrap';

import AuthService from '../services/Auth.js';
import ResourceService from '../services/Resource.js';

export default function ProfileGroupPage() {
  const [isLoading, setLoading] = useState(true);
  const [groups, setGroups] = useState([]);

  const user = AuthService.user;

  useEffect(() => {
    ResourceService.userGroups(user).then(groups => {
      setGroups(groups);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }  

  return (
      <ListGroup>
        {groups.map(group => {
          return (
            <ListGroup.Item as={Card} key={group.id}>
              <Card.Body>
                <Card.Title>{group.title}</Card.Title>
                <Card.Subtitle>{group.description}</Card.Subtitle>
                <Card.Text>
                  <Button href={'/group?groupId=' + group.id}>Détails</Button>
                </Card.Text>
              </Card.Body>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
  );
}
