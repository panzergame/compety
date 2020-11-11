import React from 'react'
import { useParams } from "react-router-dom";

import AuthService from '../services/Auth.js';

export default function ProfilePage() {
  const user = AuthService.user;

  if (user) {
    return (
      <div>{user.login}</div>
    );
  }

  return (
    <div></div>
  );
}
