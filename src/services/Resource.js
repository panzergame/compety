import React from 'react'
import axios from 'axios';

import AuthService from './Auth.js';

const URL = 'https://compety.com:3001/api/resource/';

class ResourceService {
  competency(id, userId) {
    return AuthService.get(URL + "competency/", {id, userId});
  }

  competencyValidation(validationId) {
    return AuthService.get(URL + "competency/validation", {validationId});
  }

  competencyValidatedFile(validationId) {
    return AuthService.get(URL + "competency/validation/file", {validationId});
  }

  competencyValidatedPhoto(validationId) {
    return AuthService.get(URL + "competency/validation/photo", {validationId});
  }

  searchCompetencies(query, profileId) {
    return AuthService.get(URL + "competency/search/", {query, profileId});
  }
  
  group(id) {
    return AuthService.get(URL + "group/", {id});
  }
  
  groupComptenciesToVerify(groupId) {
    return AuthService.get(URL + "group/competency/verify", {groupId});
  }

  userNotifications(user) {
    return AuthService.get(URL + 'user/notification/');
  }
  
  userGroups(user) {
    return AuthService.get(URL + 'user/group/');
  }

  userCompetencies(user) {
    return AuthService.get(URL + 'user/competency/');
  }

  searchUsers(query) {
    return AuthService.get(URL + "user/search/", {query});
  }
}

export default new ResourceService();
