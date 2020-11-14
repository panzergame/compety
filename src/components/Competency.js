import React, {useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import ResourceService from '../services/Resource.js';
import UserService from '../services/User.js';
import AuthService from '../services/Auth.js';


export default function Competency(props) {
  const [isLoading, setLoading] = useState(true);
  const [competency, setCompetency] = useState();

  useEffect(() => {
    ResourceService.competency(props.id).then(competency => {
      console.log(competency);
      setCompetency(competency);
      setLoading(false);
    });
  }, [props.id]);
  
  function onClick(e) {
    UserService.validateCompetency(competency.id).then(item => {
      console.log(item);
    })
  }

  const user = AuthService.user;

  if (isLoading) {
    return <div>Chargement... {props.id}</div>;
  }

  return (
    <Card className="w-100 h-100">
      <Card.Title className="d-flex justify-content-center w-100">{ competency.title }</Card.Title>
      <Card.Body className="d-flex flex-column">
        <Card.Text className="mb-auto">{ competency.description }</Card.Text>
        {user && 
          <Button onClick={onClick}>Ajouter à mes compétences</Button>
        }
      </Card.Body>
    </Card>
  );
}
