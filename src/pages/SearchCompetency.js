import React from 'react'
import { useLocation } from "react-router-dom";

import SearchCompetencyBar from '../components/SearchCompetencyBar.js'
import CompetencyQueryResult from '../components/CompetencyQueryResult.js'

import BreadCrumbService from '../services/BreadCrumb.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchCompetencyPage(props) {
  const urlQuery = useQuery();
  const query = urlQuery.get("query");
  const profileId = urlQuery.get("profileId");

  BreadCrumbService.pushLocation(2, 'Search', query ? '"' + query + '"' : '');
  
  return (
    <>
      <SearchCompetencyBar />
      {query &&
        <CompetencyQueryResult query={query} profileId={profileId}/>
      }
    </>
  );
}
