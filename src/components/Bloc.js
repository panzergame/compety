import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

export default function Bloc(props) {

  const id = props.id;
  // TODO fetch
  const name = "blabla bloc";
  const competenciesId = [1, 4, 7];

  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
        {name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            // TODO faire des liens vers un carousel avec touch=true pour activer le slide
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
