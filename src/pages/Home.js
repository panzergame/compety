import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';

import BreadCrumbService from '../services/BreadCrumb.js';

export default function Home() {
  BreadCrumbService.push(0, 'Home', '/');
  
  return (
    <LoremIpsum p={2}/>
  );
}
