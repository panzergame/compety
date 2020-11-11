import React from 'react'
import axios from 'axios';

const URL = 'http://localhost:3001/api/auth/';

// Service de connexion/deconnexion enregistrant le token et l'utilisateur courant'
class AuthService {
  login(login, password) {
    return axios
      .post(URL + 'login', {
        login,
        password
      })
      .then(response => {
        if (response.data.token) {
          console.log('Logged');
          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem('user', JSON.stringify(response.data.user));
        }

        return response.data;
      });
  }

  register(login, firstname, lastname, dayofbirth, password) {
    console.log(login, dayofbirth, password)
    return axios.post(URL + 'register', {
        login,
        firstname,
        lastname,
        dayofbirth,
        password
      })
      .then(response => {
          if (response.data.token) {
            console.log('Logged');
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('user', JSON.stringify(response.data.user));
          }

          return response.data;
      });
  }

  logout(login, password) {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    console.log('Unlogged');
  }

  get user() {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  get token() {
    return sessionStorage.getItem('token')
  }
  
  get headers() {
    return {'x-access-token': this.token}
  }
}

export default new AuthService();
