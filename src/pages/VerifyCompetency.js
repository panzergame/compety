import React, {useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Button, Card, Form, Image } from 'react-bootstrap';
import { BsFolderPlus, BsCheck } from 'react-icons/bs';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import Competency from '../components/Competency.js';
import ResourceService from '../services/Resource.js';
import UserService from '../services/User.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function VerifyCompetencyPage() {
  const [isLoading, setLoading] = useState(true);
  const [validation, setValidation] = useState();
  const [comment, setComment] = useState();

  const urlQuery = useQuery();
  const validationId = urlQuery.get("validationId");

  useEffect(() => {
    ResourceService.competencyValidation(validationId).then(validation => {
      setValidation(validation);
      setLoading(false);
    });
  }, [validationId]);

  function onAccept(e) {
    e.preventDefault();
    UserService.acceptValidation(validation);
  }

  function onComment(e) {
    e.preventDefault();
    UserService.commentValidation(validation, comment);
  }

  if (isLoading) {
    return <div>Chargement... {validationId}</div>;
  }

  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex align-items-center m-0">
          <BsCheck className="mr-3"/>
          <div>Vérification</div>
        </Card.Title>
        <Card.Subtitle>{validation.title}</Card.Subtitle>
        <hr />

        <Card.Text className="m-0">
          <span className="mr-2">Validée par</span>
          <a href={"/user?userId=" + validation.user}>{validation.firstname + " " + validation.lastname}</a>
        </Card.Text>
        
        <Card.Text className="m-0">
        {validation.comment}
        </Card.Text>
        <hr />
        
        <Card.Title className="d-flex align-items-center">
            <BsFolderPlus className="mr-3"/>
            <div>Consulter la preuve</div>
        </Card.Title>
        <Card.Text className="m-0">
          {validation.hasfile &&
            <a href={ResourceService.competencyValidatedFileUrl(validation.id)}>Fichier {validation.fileName}</a>}
          {validation.hasphoto &&
            <Image src={ResourceService.competencyValidatedPhotoUrl(validation.id)} fluid/>
          }
        </Card.Text>
        
        <hr />

        <Card.Text className="m-0">
          <Form onSubmit={onComment} className="d-flex flex-column">
            <Form.Group className="pt-auto">
              <Form.Control as="textarea" rows="3" placeholder="Entrez un commentaire"
                onChange={e => setComment(e.target.value) }/>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Commenter
            </Button>
          </Form>
          
          <hr />
          <Form onSubmit={onAccept} className="d-flex flex-column">
            <Button variant="primary" type="submit" className="w-100">
              Accepter
            </Button>
          </Form>
        </Card.Text>
          
      </Card.Body>
    </Card>
  );
}
