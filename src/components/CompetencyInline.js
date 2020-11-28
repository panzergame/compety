import React, {useState, useEffect } from 'react'
import { FormControl, InputGroup, Button, ListGroup } from 'react-bootstrap';
import { BsSearch, BsPersonPlusFill, BsX } from 'react-icons/bs';
import ResourceService from '../services/Resource.js';
import GroupService from '../services/Group.js';

// Affichage dans basique d'ue competence dans une liste'

export default function CompetencyInline(props) {
  const competency = props.competency;
  return (
    <>
      <a href={"/competency?competencyId=" + competency.id}>{competency.title}</a>
      {competency.validated &&
        <div>valide</div>
      }
    </>
  );
}
