// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/AuthForm.module.scss';
import { setUser } from '../../utils/auth';
import { FaEye, FaEyeSlash, FaLock, FaEnvelope, FaUser } from 'react-icons/fa';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      setTimeout(() => {
        setUser({ email, username, password });
        setLoading(false);
        navigate('/dashboard');
      }, 1000); // Имитация асинхронного запроса
    } catch (err) {
      setLoading(false);
      setError('Failed to register. Please try again.');
    }
  };

  return (
      <div className={styles.authPage}>
        <div className={styles.authImage}>
          <img src="https://via.placeholder.com/600x800" alt="Classroom" />
          <div className={styles.imageOverlay}>
            <h2>LOREM IPSUM IS SIMPLY</h2>
          </div>
        </div>
        <div className={styles.authForm}>
          <h1>Welcome to lorem..!</h1>
          <div className={styles.tabs}>
            <Link to="/login" className={styles.tab}>
              Login
            </Link>
            <Link to="/register" className={`${styles.tab} ${styles.active}`}>
              Register
            </Link>
          </div>
          <p className={styles.description}>
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          {error && <div className={styles.error}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <FaEnvelope className={styles.inputIcon} />
              <input
                  type="email"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
            </div>
            <div className={styles.inputGroup}>
              <FaUser className={styles.inputIcon} />
              <input
                  type="text"
                  placeholder="Enter your User name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
              />
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.passwordWrapper}>
                <FaLock className={styles.inputIcon} />
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <span className={styles.eyeIcon} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              </div>
            </div>
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>
      </div>
  );
};

export default RegisterPage;