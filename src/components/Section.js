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
        <div className="d-flex ml-auto align-items-center">
          {section.verified > 0 &&
            <div className="text-success mr-2">{Math.round(section.verified / section.total * 100)}%</div>
          }
          <BsList />
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={section.id}>
        <Card.Body>
          <ListGroup variant="flush">
          {section.competencies.map(competency => {
            return (
              <ListGroup.Item key={competency.id}>
                <Card as={competencyInline} competency={competency}/>
              </ListGroup.Item>
            );
          })}
          </ListGroup>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}
