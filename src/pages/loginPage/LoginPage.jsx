// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/AuthForm.module.scss';
import { getUser, setUser } from '../../utils/auth';
import { FaEye, FaEyeSlash, FaLock, FaEnvelope, FaCheckSquare, FaSquare } from 'react-icons/fa';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const user = getUser();
    if (user && user.email === email && user.password === password) {
      setTimeout(() => {
        setLoading(false);
        if (rememberMe) {
          setUser(user); // Сохраняем пользователя, если "Remember me" включён
        }
        navigate('/dashboard');
      }, 1000); // Имитация асинхронного запроса
    } else {
      setLoading(false);
      setError('Invalid email or password');
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
            <Link to="/login" className={`${styles.tab} ${styles.active}`}>
              Login
            </Link>
            <Link to="/register" className={styles.tab}>
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
            <div className={styles.options}>
              <label className={styles.rememberMe}>
                {rememberMe ? <FaCheckSquare /> : <FaSquare />}
                <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    style={{ display: 'none' }}
                />
                Remember me
              </label>
              <Link to="/forgot-password" className={styles.forgotPassword}>
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
  );
};

export default LoginPage;