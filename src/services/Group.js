import React from 'react'
import axios from 'axios';

import AuthService from './Auth.js';

const URL = process.env.REACT_APP_API_URL + '/api/action/group/';

class GroupService {
  create(title, description) {
    return AuthService.post(URL + 'create', {title, description, creator: AuthService.user.id});
  }
  
  removeUser(group, user) {
    return AuthService.post(URL + 'user/remove', {userId: user.id, groupId: group.id});
  }

  invite(group, user) {
    return AuthService.post(URL + 'invite/create', {userId: user.id, groupId: group.id});
  }

  acceptInvite(group) {
    return AuthService.post(URL + 'invite/accept', {groupId: group.id});
  }
}

export default new GroupService();
