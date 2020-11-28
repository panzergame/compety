import React, {useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Button, Card, Form } from 'react-bootstrap';
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
  const [file, setFile] = useState();
  const [photoUri, setPhotoUri] = useState();
  const [comment, setComment] = useState();

  const urlQuery = useQuery();
  const validationId = urlQuery.get("validationId");

  useEffect(() => {
    ResourceService.competencyValidation(validationId).then(validation => {
      setValidation(validation);
      setLoading(false);
    });
  }, [validationId]);

  function onSubmit(e) {
    e.preventDefault();
    console.log(file);
  }

  if (isLoading) {
    return <div>Chargement... {validationId}</div>;
  }

  return (
    <Card className="h-100">
      <Card.Body className="h-100">
        <Card.Title className="d-flex align-items-center">
          <BsCheck className="mr-3"/>
          <div>Vérification de</div>
        </Card.Title>
        <Card.Subtitle>{validation.title}</Card.Subtitle>
        <hr />

        <div>Validé par</div>
        
      
        <Card.Title className="d-flex align-items-center">
            <BsFolderPlus className="mr-3"/>
            <div>Consulter la preuve</div>
        </Card.Title>
          
        <Form onSubmit={onSubmit} className="d-flex flex-column">
          <Button variant="primary" type="submit" className="w-100 mt-auto">
            Vérifier
          </Button>
        </Form>
          
      </Card.Body>
    </Card>
  );
}
