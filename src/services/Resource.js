import React from 'react'
import axios from 'axios';

const URL = 'http://localhost:3001/api/resource/';

class ResourceService {
  competency(id) {
    return axios.get(URL + "competency/", {params: {id}})
      .then(response => {
        return response.data;
      });
  }
}

export default new ResourceService();
