import React from 'react'
import axios from 'axios';
import streamToBlob from 'stream-to-blob';

import AuthService from './Auth.js';

const URL = process.env.REACT_APP_API_URL + '/api/action/notification/';

class NotificationService {
  read() {
    
  }
  
  subscribe(subscription) {
    return AuthService.post(URL + 'subscribe', {subscription});
  }
  
  isPushNotificationSupported() {
    return "serviceWorker" in navigator && "PushManager" in window;
  }
}

export default new NotificationService();
