// src/pages/Dashboard.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/AuthForm.module.scss';
import { getUser, isAuthenticated } from '../utils/auth';

const Dashboard = () => {
  const user = getUser();

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated()} />
      <div className={styles.dashboard}>
        <h1>Welcome to Dashboard</h1>
        <p>Username: {user?.username || 'N/A'}</p>
        <p>Email: {user?.email || 'N/A'}</p>
      </div>
    </>
  );
};

export default Dashboard;
