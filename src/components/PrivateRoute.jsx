// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

const PrivateRoute = ({ children }) => {
  const authenticated = isAuthenticated();

  if (authenticated === null) {
    return <div>Loading...</div>; // Показываем лоадер, пока проверяем авторизацию
  }

  return authenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
