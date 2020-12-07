import React, {useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Button, Card, Form, Image, Modal } from 'react-bootstrap';
import { BsFolderPlus, BsCheck } from 'react-icons/bs';

import CompetencyValidation from '../components/CompetencyValidation.js';
import ResourceService from '../services/Resource.js';
import UserService from '../services/User.js';
import BreadCrumbService from '../services/BreadCrumb.js';

// Button de vérification lié au modal
function AcceptValidation(setShow) {
  return (props) => {
    function onAccept(e) {
      e.preventDefault();
      UserService.acceptValidation(props.validation.id).then(
        ResourceService.competencyValidation(props.validation.id).then(validation => {
          props.setValidation(validation);
          setShow(true);
        })
      );
    }

    return (
      <div>
        <hr />
        <Form onSubmit={onAccept} className="d-flex flex-column">
          <Button variant="primary" type="submit" className="w-100">
            Accepter
          </Button>
        </Form>
      </div>
    );
  }
}
export default function VerifyCompetencyPage() {
  BreadCrumbService.pushLocation(8, 'Verify', 'Vérification');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CompetencyValidation footer={AcceptValidation(setShow)}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Compétence vérifiée</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
