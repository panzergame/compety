import React from 'react'
import axios from 'axios';

import AuthService from './Auth.js';

const URL = 'http://192.168.1.37:3001/api/action/user/';

class UserService {
  validateCompetency(competencyId) {
    return axios.post(URL + "validateCompetency", {headers: AuthService.headers, params: {competencyId}})
      .then(response => {
        return response.data;
      });
  }

  removeCompetency(competencyId) {
    return axios.post(URL + "removeCompetency", {headers: AuthService.headers, params: {competencyId}})
      .then(response => {
        return response.data;
      });
  }
}

export default new UserService();
