// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NotFound.module.scss';

const NotFound = () => (
  <div className={styles.notFound}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to="/" className={styles.homeLink}>
      Go to Home
    </Link>
  </div>
);

export default NotFound;
