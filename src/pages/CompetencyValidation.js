import React, {useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Button, Card, Form, Image, Modal } from 'react-bootstrap';
import { BsFolderPlus, BsCheck } from 'react-icons/bs';

import CompetencyValidation from '../components/CompetencyValidation.js';
import ResourceService from '../services/Resource.js';
import UserService from '../services/User.js';

function Revalidate() {
  return (<></>);
}

export default function CompetencyValidationPage() {
  return (
      <CompetencyValidation footer={Revalidate}/>
  );
}
