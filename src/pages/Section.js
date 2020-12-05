import React, {useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Accordion } from 'react-bootstrap';

import Section from '../components/Section.js';

import ResourceService from '../services/Resource.js';
import BreadCrumbService from '../services/BreadCrumb.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SectionPage() {
  const [isLoading, setLoading] = useState(true);
  const [section, setSection] = useState();

  const urlQuery = useQuery();
  const sectionId = urlQuery.get("sectionId");

  useEffect(() => {
    ResourceService.section(sectionId).then(section => {
      setSection(section);
      setLoading(false);
    });
  }, [sectionId]);

  if (isLoading) {
    return <div>Chargement...</div>;
  }    

  BreadCrumbService.pushLocation(9, 'Section', section.title);

  return (
    <Accordion defaultActiveKey={section.id}>
      <Section section={section}/>
    </Accordion>
  );
}
