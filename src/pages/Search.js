import React from 'react'
import { useParams } from "react-router-dom";
import Bloc from '../components/Bloc.js'
import SearchBar from '../components/SearchBar.js'

export default function SearchPage(props) {
  const { query } = useParams();

  return (
    <>
      <SearchBar />
    </>
  );
}
