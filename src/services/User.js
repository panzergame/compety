import React from 'react'
import axios from 'axios';

import AuthService from './Auth.js';

const URL = 'http://192.168.1.37:3001/api/action/user/';

class UserService {
  validateCompetency(id) {
    return axios.post(URL + "validateCompetency", {headers: AuthService.headers, params: {id}})
      .then(response => {
        return response.data;
      });
  }
}

export default new UserService();
