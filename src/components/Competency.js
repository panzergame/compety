import React, {useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import ResourceService from '../services/Resource.js';
import UserService from '../services/User.js';
import AuthService from '../services/Auth.js';


export default function Competency(props) {
  const [isLoading, setLoading] = useState(true);
  const [competency, setCompetency] = useState();
  const user = AuthService.user;

  useEffect(() => {
    ResourceService.competency(props.id).then(competency => {
      setCompetency(competency);
      setLoading(false);
    });
  }, [props.id]);

  function remove(e) {
    UserService.removeCompetency(competency).then(
      ResourceService.competency(props.id).then(setCompetency));
  }

  if (isLoading) {
    return <div>Chargement... {props.id}</div>;
  }

  return (
    <Card className="w-100 h-100">
      <Card.Title className="d-flex justify-content-center w-100">{ competency.title }</Card.Title>
      <Card.Body className="d-flex flex-column">
        <Card.Text className="mb-auto">{ competency.description }</Card.Text>
        {user && competency.validated &&
          <Button onClick={remove}>Retirer de mes competences</Button>
        }
        {user && !competency.validated &&
          <Button href={'/competency/validate/?competencyId=' + competency.id} >Ajouter mes competences</Button>          
        }
      </Card.Body>
    </Card>
  );
}
