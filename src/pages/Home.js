import React from 'react'

import { Card } from 'react-bootstrap';
import { BsFillPersonCheckFill, BsBuilding, BsGraphUp, BsChevronCompactRight, BsSearch, BsPeopleFill, BsPersonPlusFill} from 'react-icons/bs';

import BreadCrumbService from '../services/BreadCrumb.js';
import AuthService from '../services/Auth.js';

export default function Home() {
  BreadCrumbService.pushLocation(0, 'Home', '');
  
  return (
    <div className="d-flex flex-column h-100 p-1">
    
    {AuthService.user &&
      <>
      <Card className="">
        <a href='/profile/competencies/'>
        <Card.Body className="my-4">
          <Card.Title className="m-0">
            <BsFillPersonCheckFill />
            <span className="ml-2">Mes compétences</span>
          </Card.Title>
        </Card.Body>
        </a>
      </Card>

      <Card className="">
        <a href='/competency/search/'>
        <Card.Body className="my-4">
          <Card.Title className="m-0">
            <BsSearch />
            <span className="ml-2">Rechercher des compétences</span>
          </Card.Title>
        </Card.Body>
        </a>
      </Card>
  
      <Card className="">
        <a href='/profile/groups/'>
        <Card.Body className="my-4">
          <Card.Title className="m-0">
            <BsPeopleFill />
            <span className="ml-2">Mes groupes</span>
          </Card.Title>
        </Card.Body>
        </a>
      </Card>

      <Card className="">
        <a href='/group/create/'>
        <Card.Body className="my-4">
          <Card.Title className="m-0">
            <BsPersonPlusFill />
            <span className="ml-2">Créer un groupe</span>
          </Card.Title>
        </Card.Body>
        </a>
      </Card>
      </>
    }
    {!AuthService.user && 
      <Card className="">
        <a href='/register/'>
        <Card.Body className="my-4">
          <Card.Title className="m-0">
            <BsPersonPlusFill />
            <span className="ml-2">S'inscrire</span>
          </Card.Title>
        </Card.Body>
        </a>
      </Card>
    }
    
    </div>
  );
}
