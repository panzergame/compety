import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { Accordion } from 'react-bootstrap';

import AuthService from '../services/Auth.js';
import ResourceService from '../services/Resource.js';

import Section from '../components/Section.js';

export default function ProfileCompetenciesPage() {
  const [isLoading, setLoading] = useState(true);
  const [sections, setSections] = useState();

  const user = AuthService.user;

  useEffect(() => {
    ResourceService.userCompetencies(user).then(sections => {
      setSections(sections);
      console.log(sections);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }  

  return (
    <>
      <div>Mes compétences</div>
      <Accordion>
        {sections.map(section => {
          return (<Section section={section} key={section.id}/>);
        })}
      </Accordion>
    </>
  );
}
