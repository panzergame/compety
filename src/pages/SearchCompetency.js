import React from 'react'
import { useLocation } from "react-router-dom";
import Bloc from '../components/Bloc.js'
import SearchCompetencyBar from '../components/SearchCompetencyBar.js'
import CompetencyQueryResult from '../components/CompetencyQueryResult.js'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchCompetencyPage(props) {
  const urlQuery = useQuery();
  const query = urlQuery.get("query");
  const profileId = urlQuery.get("profileId");

  return (
    <>
      <SearchCompetencyBar />
      <CompetencyQueryResult query={query} profileId={profileId}/>
    </>
  );
}
