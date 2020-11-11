import React from 'react'
import axios from 'axios';

import AuthService from './Auth.js';

const URL = 'http://192.168.1.37:3001/api/resource/';

class ResourceService {
  competency(id) {
    return axios.get(URL + "competency/", {headers: AuthService.headers, params: {id}})
      .then(response => {
        return response.data;
      });
  }

  searchCompetencies(query, profileId) {
    return axios.get(URL + "competency/search/", {headers: AuthService.headers, params: {query, profileId}})
      .then(response => {
        return response.data;
      });
  }
}

export default new ResourceService();
