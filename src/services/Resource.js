import React from 'react'
import axios from 'axios';

const URL = 'http://192.168.1.37:3001/api/resource/'; // TODO

class ResourceService {
  competency(id) {
    return axios.get(URL + "competency/", {params: {id}})
      .then(response => {
        return response.data;
      });
  }
}

export default new ResourceService();
