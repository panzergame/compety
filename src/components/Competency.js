import React, {useState, useEffect } from 'react'
import ResourceService from '../services/Resource.js';
import { Button } from 'react-bootstrap';


export default function Competency(props) {
  const [isLoading, setLoading] = useState(true);
  const [competency, setCompetency] = useState();

  useEffect(() => {
    ResourceService.competency(props.id).then(competency => {
      console.log(competency);
      setCompetency(competency);
      setLoading(false);
    });
  }, []);
  
  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="d-flex flex-column w-100">
      <h2 className="d-flex justify-content-center w-100">{ competency.title }</h2>
      <div>{ competency.description }</div>
      <Button>Ajouter à mes compétences</Button>
    </div>
  );
}
