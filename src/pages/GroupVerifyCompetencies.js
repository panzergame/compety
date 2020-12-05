import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Group from '../components/Group.js';
import { BsPersonFill, BsCheck } from 'react-icons/bs';

import { Accordion, Button } from 'react-bootstrap';

import AuthService from '../services/Auth.js';
import ResourceService from '../services/Resource.js';
import BreadCrumbService from '../services/BreadCrumb.js';

import Section from '../components/Section.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function VerifyCompetencyInline(props) {
  const competency = props.competency;
  return (
    <div className="d-flex flex-column">
      <div>{competency.title}</div>
      <hr/>
      <div className="d-flex align-items-center">
        <Button className="mr-auto" href={"/competency/verify?validationId=" + competency.validation}>
          <BsCheck/>
          Détails
        </Button>
        <div>
          <BsPersonFill />
          {competency.firstname + " " + competency.lastname}
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

  BreadCrumbService.pushLocation(6, 'Validation', 'Validation en attente');

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
      <Accordion>
        {sections.map(section => {
          return (<Section section={section} competencyInline={VerifyCompetencyInline} key={section.id}/>);
        })}
      </Accordion>
    </>
  );
}
