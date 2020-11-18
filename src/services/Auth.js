import React from 'react'
import axios from 'axios';

const URL = 'http://localhost:3001/api/auth/';

// Service de connexion/deconnexion enregistrant le token et l'utilisateur courant'
class AuthService {
  post(url, params) {
    return axios.post(url, Object.assign({headers: AuthService.headers}, params)).then(response => {
      return response.data;
    })
  }

  get(url, params) {
    return axios.get(url, {headers: AuthService.headers, params: params}).then(response => {
      return response.data;
    })
  }  

  login(login, password) {
    return this.post(URL + 'login', {
        login,
        password
      })
      .then(response => {
        if (response.token) {
          console.log('Logged');
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('user', JSON.stringify(response.user));
        }

        return response;
      });
  }

  register(login, firstname, lastname, dayofbirth, password, role) {
    console.log(login, dayofbirth, password)
    return this.post(URL + 'register', {
        login,
        firstname,
        lastname,
        dayofbirth,
        password,
        role
      })
      .then(response => {
          if (response.token) {
            console.log('Logged');
            sessionStorage.setItem('token', response.token);
            sessionStorage.setItem('user', JSON.stringify(response.user));
          }

          return response;
      });
  }

  logout() {
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
    if (this.token) {
      return {'x-access-token': this.token}
    }
    else {
      return {};
    }
  }
}

export default new AuthService();
