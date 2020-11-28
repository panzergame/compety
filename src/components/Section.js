import React from 'react'
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap';
import CompetencyInline from './CompetencyInline.js';
import { BsList } from 'react-icons/bs';

export default function Section(props) {
  const section = props.section;
  const competencyInline = props.competencyInline ? props.competencyInline : CompetencyInline;
  
  return (
    <Card>
      <Accordion.Toggle className="w-100" as={Card.Header} variant="link" eventKey={section.id} className="d-flex align-items-center w-100">
        <div className="d-flex flex-wrap">{section.title}</div>
        <BsList className="d-flex ml-auto"/>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={section.id}>
        <Card.Body>
          <ListGroup>
          {section.competencies.map(competency => {
            return (
              <ListGroup.Item key={competency.id} action href={"/competency/?competencyId=" + competency.id} as={competencyInline} competency={competency}/>
            );
          })}
          </ListGroup>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}
