import React from 'react'
import { useLocation } from "react-router-dom";
import Group from '../components/Group.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function GroupPage() {
  const urlQuery = useQuery();
  const groupId = urlQuery.get("groupId");

  return (
    <Group id={groupId}/>
  );
}
