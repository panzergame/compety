import React, {useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import { BsCheckAll, BsCheck } from 'react-icons/bs';

import ResourceService from '../services/Resource.js';
import UserService from '../services/User.js';
import AuthService from '../services/Auth.js';
import BreadCrumbService from '../services/BreadCrumb.js';

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

  useEffect(() => {
      if (competency) {
        BreadCrumbService.push(3, competency.title, '/competency?competencyId=' + competency.id);
      }
  }, [competency]);

  function remove(e) {
    UserService.removeCompetency(competency).then(
      ResourceService.competency(props.id).then(setCompetency));
  }

  if (isLoading) {
    return <div>Chargement... {props.id}</div>;
  }

  return (
    <Card className="w-100 h-100">
      <Card.Title className="d-flex justify-content-center w-100">
        <div className="d-flex align-items-center">
          <div>{ competency.title }</div>
        </div>
      </Card.Title>
      <Card.Subtitle>
      <div>
        {competency.validated && competency.validated.verification &&
          <div>
            <BsCheckAll /> <span>Vérifié</span>
          </div>
        }
        
        {competency.validated && competency.validated.validation &&
          <div>
            <BsCheck /> <span>Acquis</span>
          </div>
        }
      </div>
      </Card.Subtitle>
      <Card.Body className="d-flex flex-column">
        <Card.Text className="mb-auto">{ competency.description }</Card.Text>
        
        {competency.validated && competency.validated.validation &&
            <>
              <hr />
              <Button href={'/competency/validation?validationId=' + competency.validated.validation}>
                Détails de la validation
              </Button>
              <hr />
            </>
        }
        
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
