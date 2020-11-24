import React from 'react'
import axios from 'axios';

import AuthService from './Auth.js';

const URL = 'https://compety.com:3001/api/resource/';

class ResourceService {
  competency(id) {
    return AuthService.get(URL + "competency/", {id});
  }

  competencyValidatedFile(competencyId) {
    return AuthService.get(URL + "competency/validated/file", {competencyId});
  }

  competencyValidatedPhoto(competencyId) {
    return AuthService.get(URL + "competency/validated/photo", {competencyId});
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
