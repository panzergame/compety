import React, {useState, useEffect } from 'react'
import { Card, Button, ListGroup, Dropdown } from 'react-bootstrap';
import { BsCheckAll, BsCheck } from 'react-icons/bs';
import ResourceService from '../services/Resource.js';
import GroupService from '../services/Group.js';

// Affichage dans basique d'une compétence dans une liste'

export default function CompetencyInline(props) {
  const competency = props.competency;
  return (
    <div>
      <div className="d-flex align-items-center">
        <a href={"/competency?competencyId=" + competency.id}>{competency.title}</a>
        <div className="d-flex ml-auto align-items-center">
          {competency.validated && competency.validated.verification &&
            <BsCheckAll />
          }
          
          {competency.validated && competency.validated.validation &&
            <BsCheck />
          }
          {competency.validated && competency.validated.validation &&
            <Dropdown className="ml-2">
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              </Dropdown.Toggle>
              
              <Dropdown.Menu>
                <Dropdown.Item href={'/competency/validation?validationId=' + competency.validated.validation}>
                  <span>Détails de la validation</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          }
        </div>
      </div>
    </div>
  );
}
