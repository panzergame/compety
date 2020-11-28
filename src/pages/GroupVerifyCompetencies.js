import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Group from '../components/Group.js';
import { BsPersonFill, BsCheck } from 'react-icons/bs';

import { Accordion, Button } from 'react-bootstrap';

import AuthService from '../services/Auth.js';
import ResourceService from '../services/Resource.js';

import Section from '../components/Section.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function VerifyCompetencyInline(props) {
  const validation = props.validation;
  return (
    <div className="d-flex flex-column">
      <div>{validation.title}</div>
      <hr/>
      <div className="d-flex align-items-center">
        <Button className="mr-auto" href={"/competency/verify?validationId=" + validation.id}>
          <BsCheck/>
          Détails
        </Button>
        <div>
          <BsPersonFill />
          {validation.firstname + " " + validation.lastname}
        </div>
      </div>
    </div>
  );
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
          return (<Section section={section} competencyInline={VerifyCompetencyInline} key={section.id}/>);
        })}
      </Accordion>
    </>
  );
}
