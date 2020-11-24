import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Group from '../components/Group.js';

import { Accordion } from 'react-bootstrap';

import AuthService from '../services/Auth.js';
import ResourceService from '../services/Resource.js';

import Section from '../components/Section.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function GroupVerifyCompetenciesPage() {
  const [isLoading, setLoading] = useState(true);
  const [sections, setSections] = useState();

  const urlQuery = useQuery();
  const groupId = urlQuery.get("groupId");

  useEffect(() => {
    ResourceService.groupComptenciesToVerify(groupId).then(sections => {
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
      <div>Compétences à valider</div>
      <Accordion>
        {sections.map(section => {
          return (<Section section={section} key={section.id}/>);
        })}
      </Accordion>
    </>
  );
}
