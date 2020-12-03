import React from 'react'
import axios from 'axios';
import streamToBlob from 'stream-to-blob';

import AuthService from './Auth.js';

const URL = 'https://compety.com:3001/api/action/user/';

class UserService {
  validateCompetency(competency, file, photoUri, comment) {
    let params = {competencyId: competency.id, comment};
    return (async () => {
      const formData = new FormData();
      if (file) {
        const fileBlob = new Blob([file]);
        formData.append('file', fileBlob);
        params.fileName = file.name;
      }
      if (photoUri) {
        const photoBlob = await fetch(photoUri).then(res => res.blob());        formData.append('photo', photoBlob);
      }

      return formData;
    })().then(formData => {
      return AuthService.postForm(URL + "competency/validate", formData, params);
    });
  }

  removeCompetency(competency) {
    return AuthService.post(URL + "competency/remove", {competencyId: competency.id});
  }
  
  acceptValidation(validation) {
    return AuthService.post(URL + 'competency/validation/accept', {validationId: validation.id});
  }
  
  commentValidation(validation, comment) {
    return AuthService.post(URL + 'competency/validation/comment', {validationId: validation.id, comment});
  }
}

export default new UserService();
