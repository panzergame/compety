import React, {useState, useEffect } from 'react'
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap';
import ResourceService from '../services/Resource.js';
import UserService from '../services/User.js';
import Section from './Section.js';


export default function CompetencyQueryResult(props) {
  const [isLoading, setLoading] = useState(true);
  const [sections, setSections] = useState();

  useEffect(() => {
    ResourceService.searchCompetencies(props.query, props.profileId).then(sections => {
      setSections(sections);
      setLoading(false);
    });
  }, [props.query, props.profileId]);
  
  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <div>Résultat pour la recherche "{props.query}"</div>
      <Accordion>
      {sections.map(section => {
        return (<Section section={section} key={section.id} />);
      })}
      </Accordion>
    </>
  );
}
