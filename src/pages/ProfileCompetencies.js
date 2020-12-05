import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { Accordion } from 'react-bootstrap';

import AuthService from '../services/Auth.js';
import ResourceService from '../services/Resource.js';
import BreadCrumbService from '../services/BreadCrumb.js';

import Section from '../components/Section.js';

export default function ProfileCompetenciesPage() {
  BreadCrumbService.pushLocation(2, 'MyCompetencies', 'Mes compétences');

  const [isLoading, setLoading] = useState(true);
  const [sections, setSections] = useState();

  const user = AuthService.user;

  useEffect(() => {
    ResourceService.userCompetencies(user).then(sections => {
      setSections(sections);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }  

  return (
    <>
      <Accordion>
        {sections.map(section => {
          return (<Section section={section} key={section.id}/>);
        })}
      </Accordion>
    </>
  );
}
