import React, {useState, useEffect } from 'react'
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap';
import ResourceService from '../services/Resource.js';
import UserService from '../services/User.js';


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
        return (
          <Card key={section.id}>
            <Accordion.Toggle className="w-100" as={Card.Header} variant="link" eventKey={section.id} className="justify-content-start w-100">
              {section.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={section.id}>
              <Card.Body>
                <ListGroup>
                {section.competencies.map(competency => {
                  return (
                    <ListGroup.Item action href={"/competency/?competencyId=" + competency.id}>
                      {competency.title}
                    </ListGroup.Item>
                  );
                })}
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
      </Accordion>
    </>
  );
}
