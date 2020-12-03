import React, {useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Button, Card, Form, Image, Modal } from 'react-bootstrap';
import { BsFolderPlus, BsCheck } from 'react-icons/bs';

import CompetencyValidation from '../components/CompetencyValidation.js';
import ResourceService from '../services/Resource.js';
import UserService from '../services/User.js';

function Revalidate(props) {
  return (<>
    <hr />
    <Button action href={'/competency/validate?competencyId=' + props.validation.competency}>
      Valider à nouveau 
    </Button>
  </>);
}

export default function CompetencyValidationPage() {
  return (
      <CompetencyValidation footer={Revalidate}/>
  );
}
