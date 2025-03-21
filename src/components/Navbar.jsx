// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/Navbar.module.scss';
import { removeUser } from '../utils/auth';

const Navbar = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUser();
    navigate('/login');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TOTC</div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/courses" className={styles.navLink}>
            Courses
          </Link>
        </li>
        <li>
          <Link to="/careers" className={styles.navLink}>
            Careers
          </Link>
        </li>
        <li>
          <Link to="/blog" className={styles.navLink}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.navLink}>
            About Us
          </Link>
        </li>
      </ul>
      <div className={styles.authButtons}>
        {isAuthenticated ? (
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className={styles.loginButton}>
              Login
            </Link>
            <Link to="/register" className={styles.signUpButton}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Navbar;
