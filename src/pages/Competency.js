import React from 'react'
import { useLocation } from "react-router-dom";
import Competency from '../components/Competency.js';

import BreadCrumbService from '../services/BreadCrumb.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CompetencyPage() {
  const urlQuery = useQuery();
  const competencyId = urlQuery.get("competencyId");

  return (
    <Competency id={competencyId}/>
  );
}
