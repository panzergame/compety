import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { ListGroup, Card } from 'react-bootstrap';

import AuthService from '../services/Auth.js';
import ResourceService from '../services/Resource.js';

export default function ProfileCompetenciesPage() {
  const [isLoading, setLoading] = useState(true);
  const [competencies, setCompetencies] = useState([]);

  const user = AuthService.user;

  useEffect(() => {
    ResourceService.userCompetencies(user).then(competencies => {
      setCompetencies(competencies);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }  

  return (
      <ListGroup>
        {competencies.map(competency => {
          return (
            <ListGroup.Item as={Card} key={competency.id}>
              <Card.Body>
                <Card.Title>{competency.title}</Card.Title>
                <Card.Link href={'/competency?competencyId=' + competency.id}>Détails</Card.Link>
              </Card.Body>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
  );
}
