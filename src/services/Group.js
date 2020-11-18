import React from 'react'
import axios from 'axios';

import AuthService from './Auth.js';

const URL = 'http://192.168.1.37:3001/api/action/group/';

class GroupService {
  create(title, description) {
    return AuthService.post(URL + 'create', {title, description, creator: AuthService.user.id});
  }
  
  removeUser(group, user) {
    return AuthService.post(URL + 'removeUser', {userId: user.id, groupId: group.id});
  }

  inviteUser(group, user) {
    return AuthService.post(URL + 'inviteUser', {userId: user.id, groupId: group.id});
  }

  acceptInvite(group) {
    return AuthService.post(URL + 'acceptInvite', {groupId: group.id});
  }
}

export default new GroupService();
