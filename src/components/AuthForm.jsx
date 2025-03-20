import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from '../styles/AuthForm.module.scss';
import classroomImage from '../assets/logImg.png';
import rImage from '../assets/Register.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const AuthForm = ({ onSubmit, isLogin, status, error }) => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [formData, setFormData] = useState({ email: '', username: '', password: '' });
    const [formErrors, setFormErrors] = useState({ email: '', username: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        const errors = { email: '', username: '', password: '' };
        let isValid = true;

        if (!isLogin) {
            if (!formData.email) {
                errors.email = t('emailRequired');
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                errors.email = t('emailInvalid');
                isValid = false;
            }
        }

        if (!formData.username) {
            errors.username = t('usernameRequired');
            isValid = false;
        }

        if (!formData.password) {
            errors.password = t('passwordRequired');
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFormErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const dataToSubmit = isLogin
                ? { username: formData.username, password: formData.password }
                : formData;
            onSubmit(dataToSubmit);
        }
    };

    const handleGuestLogin = () => {
        const guestCredentials = { username: 'guest', password: 'guest123' };
        onSubmit(guestCredentials);
    };

    // Функция для переключения языка
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';
    const currentImage = isLogin ? classroomImage : rImage;

    return (
        <div className={styles.authContainer}>
            <div className={styles.leftSection}>
                <div className={styles.imageWrapper}>
                    <img src={currentImage} alt={isLogin ? 'Login Classroom' : 'Register Classroom'} />
                </div>
                <p className={styles.description}>{t('description')}</p>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.formWrapper}>
                    {/* Переключатель языков */}
                    <div className={styles.languageSwitcher}>
                        <button onClick={() => changeLanguage('en')}>EN</button>
                        <button onClick={() => changeLanguage('ru')}>RU</button>
                        <button onClick={() => changeLanguage('kg')}>KG</button>
                    </div>
                    <h2 className={styles.welcome}>{t('welcome')}</h2>
                    <div className={styles.tabs}>
                        <Link
                            to="/login"
                            className={`${styles.tab} ${isLoginPage ? styles.active : ''}`}
                        >
                            {t('login')}
                        </Link>
                        <Link
                            to="/register"
                            className={`${styles.tab} ${isRegisterPage ? styles.active : ''}`}
                        >
                            {t('register')}
                        </Link>
                    </div>
                    <p className={styles.description}>{t('description')}</p>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className={styles.inputGroup}>
                                <label>{t('email')}</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t('enterEmail')}
                                    className={formErrors.email ? styles.error : ''}
                                />
                                {formErrors.email && (
                                    <p className={styles.errorMessage}>{formErrors.email}</p>
                                )}
                            </div>
                        )}
                        <div className={styles.inputGroup}>
                            <label>{t('username')}</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder={t('enterUsername')}
                                className={formErrors.username ? styles.error : ''}
                            />
                            {formErrors.username && (
                                <p className={styles.errorMessage}>{formErrors.username}</p>
                            )}
                        </div>
                        <div className={styles.inputGroup}>
                            <label>{t('password')}</label>
                            <div className={styles.passwordWrapper}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder={t('enterPassword')}
                                    className={formErrors.password ? styles.error : ''}
                                />
                                <span
                                    className={styles.eyeIcon}
                                    onClick={togglePasswordVisibility}
                                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                            </div>
                            {formErrors.password && (
                                <p className={styles.errorMessage}>{formErrors.password}</p>
                            )}
                        </div>
                        {isLogin && (
                            <div className={styles.options}>
                                <label>
                                    <input type="checkbox" /> {t('rememberMe')}
                                </label>
                                <Link to="/forgot-password">{t('forgotPassword')}</Link>
                            </div>
                        )}
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className={styles.submitButton}
                        >
                            {status === 'loading' ? t('loading') : isLogin ? t('loginButton') : t('registerButton')}
                        </button>
                        {error && <p className={styles.error}>{t('error', { message: error })}</p>}
                    </form>
                    {isLogin && (
                        <div className={styles.guestLogin}>
                            <button
                                onClick={handleGuestLogin}
                                disabled={status === 'loading'}
                                className={styles.guestButton}
                            >
                                {status === 'loading' ? t('loading') : t('guestLogin')}
                            </button>
                        </div>
                    )}
                    <p className={styles.link}>
                        {isLogin ? t('noAccount') : t('haveAccount')}{' '}
                        <Link to={isLogin ? '/register' : '/login'}>
                            {isLogin ? t('register') : t('login')}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;