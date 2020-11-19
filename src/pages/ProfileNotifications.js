import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { ListGroup } from 'react-bootstrap';

import AuthService from '../services/Auth.js';
import ResourceService from '../services/Resource.js';

import InviteNotification from '../components/InviteNotification.js';

export default function ProfileNotificationsPage() {
  const [isLoading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  const user = AuthService.user;

  useEffect(() => {
    ResourceService.notifications(user).then(notifications => {
      setNotifications(notifications);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }  

  return (
      <ListGroup>
        {notifications.map(notification => {
          if (notification.type === 'invite') {
            return (
              <ListGroup.Item as={InviteNotification} notification={notification} className="d-flex align-items-center w-100" key={notification.id}>
                
              </ListGroup.Item>
            );
          }
        })}
        </ListGroup>
  );
}
