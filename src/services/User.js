import React from 'react'
import axios from 'axios';

import AuthService from './Auth.js';

const URL = 'http://192.168.1.37:3001/api/action/user/';

class UserService {
  validateCompetency(competency) {
    return AuthService.post(URL + "validateCompetency", {competencyId: competency.id});
  }

  removeCompetency(competency) {
    return AuthService.post(URL + "removeCompetency", {competencyId: competency.id});
  }
}

export default new UserService();
