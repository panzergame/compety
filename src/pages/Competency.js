import React from 'react'
import { useParams } from "react-router-dom";
import Competency from '../components/Competency.js';

export default function CompetencyPage() {
  const { competencyId } = useParams();
  return (
    <Competency id={competencyId}/>
  );
}
