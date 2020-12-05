import React, {useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Button, Card, Form, Image, Modal } from 'react-bootstrap';
import { BsFolderPlus, BsCheck } from 'react-icons/bs';

import CompetencyValidation from '../components/CompetencyValidation.js';
import ResourceService from '../services/Resource.js';
import UserService from '../services/User.js';
import BreadCrumbService from '../services/BreadCrumb.js';

function Revalidate(props) {
  return (<>
    <hr />
    <Button action href={'/competency/validate?competencyId=' + props.validation.competency}>
      Valider à nouveau 
    </Button>
  </>);
}

export default function CompetencyValidationPage() {
  BreadCrumbService.push(8, 'Validation', 'Validation', useLocation().search);

  return (
      <CompetencyValidation footer={Revalidate}/>
  );
}
