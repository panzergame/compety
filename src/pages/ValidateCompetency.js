import React, {useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { BsFolderPlus, BsCheck } from 'react-icons/bs';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import Competency from '../components/Competency.js';
import ResourceService from '../services/Resource.js';
import UserService from '../services/User.js';
import BreadCrumbService from '../services/BreadCrumb.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ValidateCompetencyPage() {
  const [isLoading, setLoading] = useState(true);
  const [competency, setCompetency] = useState();
  const [file, setFile] = useState();
  const [photoUri, setPhotoUri] = useState();
  const [comment, setComment] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const urlQuery = useQuery();
  const competencyId = urlQuery.get("competencyId");

  BreadCrumbService.pushLocation(12, 'Validation', 'Validation');
  
  useEffect(() => {
    ResourceService.competency(competencyId).then(competency => {
      setCompetency(competency);
      setLoading(false);
    });
  }, [competencyId]);

  function validate(e) {
  }
  
  function onSubmit(e) {
    e.preventDefault();
    console.log(file);

    UserService.validateCompetency(competency, file, photoUri, comment).then(() => {
      ResourceService.competency(competencyId).then(setCompetency);
      setShow(true);
    });
  }

  if (isLoading) {
    return <div>Chargement... {competencyId}</div>;
  }

  return (
    <>
    <Card className="h-100">
      <Card.Body className="h-100">
        <Card.Title className="d-flex align-items-center">
          <BsCheck className="mr-3"/>
          <div>Validation de</div>
        </Card.Title>
        <Card.Subtitle>
          <a href={'/competency?competencyId=' + competency.id}>{competency.title}</a>
        </Card.Subtitle>
        <hr />
      
        <Card.Title className="d-flex align-items-center">
            <BsFolderPlus className="mr-3"/>
            <div>Ajouter une preuve</div>
        </Card.Title>
          
        <Form onSubmit={onSubmit} className="d-flex flex-column">
          <Form.Group>
            <Form.Label>
              Ajouter un fichier
            </Form.Label>
            <Form.File onChange={e => setFile(e.target.files[0]) }/>
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Commentaire
            </Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Entrez un commentaire"
              onChange={e => setComment(e.target.value) }/>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-auto">
            Valider
          </Button>
        </Form>
          
      </Card.Body>
    </Card>
    
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Compétence validée</Modal.Title>
      </Modal.Header>
      <Modal.Body>Votre compétence sera bientôt vérifiée</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}
