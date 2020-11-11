import React, {useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import ResourceService from '../services/Resource.js';
import UserService from '../services/User.js';


export default function CompetencyQueryResult(props) {
  const [isLoading, setLoading] = useState(true);
  const [sections, setSections] = useState();

  useEffect(() => {
    ResourceService.searchCompetencies(props.query, props.profileId).then(sections => {
      console.log(sections);
      setSections(sections);
      setLoading(false);
    });
  }, [props.query, props.profileId]);
  
  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="d-flex flex-column w-100">
    { sections }
    </div>
  );
}
