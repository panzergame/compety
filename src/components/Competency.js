import React, {useState, useEffect } from 'react'
import ResourceService from '../services/Resource.js';

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
    <div>
      { competency.title }
    </div>
  );
}
