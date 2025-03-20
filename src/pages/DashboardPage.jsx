import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from '../redux/authSlice';
import styles from '../styles/AuthForm.module.scss';

const DashboardPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div className={styles.dashboard}>
            <h1>Dashboard</h1>
            <p>Welcome, {user?.username || 'User'}!</p>
            {user?.email && <p>Email: {user.email}</p>}
            <p>Username: {user?.username || 'N/A'}</p>
            <p>Password: {user?.password || 'N/A'}</p>
            <div style={{ margin: '20px 0' }}>
                <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontSize: '16px' }}>
                    Go to Blog
                </Link>
            </div>
            <button onClick={handleLogout} className={styles.logoutButton}>
                Logout
            </button>
        </div>
    );
};

export default DashboardPage;