import React, {useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Button, Card, Form, Image, Modal } from 'react-bootstrap';
import { BsFolderPlus, BsCheck } from 'react-icons/bs';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import Discussion from '../components/Discussion.js';
import ResourceService from '../services/Resource.js';
import UserService from '../services/User.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CompetencyValidation(props) {  
  const [isLoading, setLoading] = useState(true);
  const [validation, setValidation] = useState();
  const [comment, setComment] = useState();
  
  const urlQuery = useQuery();
  const validationId = urlQuery.get("validationId");
  
  function onComment(e) {
    e.preventDefault();
    UserService.commentValidation(validation.id, comment).then(
      ResourceService.competencyValidation(validation.id).then(setValidation));
  }
  
  useEffect(() => {
    ResourceService.competencyValidation(validationId).then(validation => {
      setValidation(validation);
      setLoading(false);
    });
  }, [validationId]);
  
  if (isLoading) {
    return <div>Chargement... {validationId}</div>;
  }
  
  const isPhoto = validation.hasfile && validation.fileName.match(/.(jpg|jpeg|png|gif)$/i);
  const fileUrl = ResourceService.competencyValidatedFileUrl(validation.id);
  
  console.log(validation.fileName, isPhoto);
  
  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex align-items-center mb-2">
          <BsCheck className="mr-3"/>
          <div>Validation</div>
        </Card.Title>
        <Card.Subtitle>
          <a href={'/competency?competencyId=' + validation.competency}>{validation.title}</a>
        </Card.Subtitle>
        <hr />

        <div className="m-0">
          <span className="mr-2">Validée par</span>
          <a href={"/user?userId=" + validation.user}>{validation.firstname + " " + validation.lastname}</a>
        </div>
        
        {validation.verificator_firstname &&
          <div className="m-0">
            <span className="mr-2">Vérifiée par {validation.verificator_firstname + ' ' + validation.verificator_lastname}</span>
          </div>
        }
        {!validation.verificator_firstname &&
          <div className="m-0">
            <span className="mr-2">En attente de vérification</span>
          </div>
        }
        <hr />
        
        <Card.Title className="d-flex align-items-center">
            <BsFolderPlus className="mr-3"/>
            <div>Consulter la preuve</div>
        </Card.Title>

        {validation.comment &&
          <div className="small">
          {validation.comment}
          </div>
        }

        <div className="m-0">
          {validation.hasfile && !isPhoto &&
            <a href={fileUrl}>Fichier {validation.fileName}</a>}
          {isPhoto &&
            <Image src={fileUrl} fluid/>
          }
        </div>
        
        <hr />

        <div className="m-0">
          <Discussion comments={validation.comments}/>
          <Form onSubmit={onComment} className="d-flex flex-column mt-2">
            <Form.Group className="pt-auto">
              <Form.Control as="textarea" rows="3" placeholder="Entrez un commentaire"
                onChange={e => setComment(e.target.value) }/>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Commenter
            </Button>
          </Form>
        </div>
        
        <props.footer validation={validation} setValidation={setValidation} />
      </Card.Body>
    </Card>
  );
}
