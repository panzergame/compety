import React from 'react'
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap'

export default function Section(props) {
  const section = props.section;

  return (
    <Card>
      <Accordion.Toggle className="w-100" as={Card.Header} variant="link" eventKey={section.id} className="justify-content-start w-100">
        {section.title}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={section.id}>
        <Card.Body>
          <ListGroup>
          {section.competencies.map(competency => {
            return (
              <ListGroup.Item key={competency.id} action href={"/competency/?competencyId=" + competency.id}>
                {competency.title}
              </ListGroup.Item>
            );
          })}
          </ListGroup>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}
