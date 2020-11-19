import React from 'react'
import axios from 'axios';

import AuthService from './Auth.js';

const URL = 'http://192.168.1.37:3001/api/resource/';

class ResourceService {
  competency(id) {
    return AuthService.get(URL + "competency/", {id});
  }

  searchCompetencies(query, profileId) {
    return AuthService.get(URL + "competency/search/", {query, profileId});
  }
  
  group(id) {
    return AuthService.get(URL + "group/", {id});
  }

  notifications(user) {
    return AuthService.get(URL + 'user/notification/');
  }

  searchUsers(query) {
    return AuthService.get(URL + "user/search/", {query});
  }
}

export default new ResourceService();
