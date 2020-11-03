import React from 'react'
import axios from 'axios';

const URL = 'http://localhost:3001/';

// Service de connexion/deconnexion enregistrant le token et l'utilisateur courant'
class Auth {
  login(login, password) {
    return axios
      .post(URL + 'login', {
        login,
        password
      })
      .then(response => {
        if (response.data.token) {
          console.log('Logged');
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }

        return response.data;
      });
  }

  logout(login, password) {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    console.log('Unlogged');
  }

  get user() {
    return JSON.parse(localStorage.getItem('user'));
  }

  get token() {
    return localStorage.getItem('token')
  }
  
  get headers() {
    return {'x-access-token': this.token}
  }
}

export default new Auth();
