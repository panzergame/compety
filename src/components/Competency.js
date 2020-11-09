import React, {useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import ResourceService from '../services/Resource.js';
import UserService from '../services/User.js';


export default function Competency(props) {
  const [isLoading, setLoading] = useState(true);
  const [competency, setCompetency] = useState();

  useEffect(() => {
    ResourceService.competency(props.id).then(competency => {
      console.log(competency);
      setCompetency(competency);
      setLoading(false);
    });
  }, [props.id]);
  
  function onClick(e) {
    UserService.validateCompetency(competency.id).then(item => {
      console.log(item);
    })
  }

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="d-flex flex-column w-100">
      <h2 className="d-flex justify-content-center w-100">{ competency.title }</h2>
      <div>{ competency.description }</div>
      <Button onClick={onClick}>Ajouter à mes compétences</Button>
    </div>
  );
}
