import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import {useGetMenuQuery} from "../redux/api/coffeeApi.js";
import {logout} from "../redux/authSlice.js";

const DashboardPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    // Получение данных меню через coffeeApi
    const { data: menu, error, isLoading } = useGetMenuQuery();

    // Защита маршрута: если пользователь не аутентифицирован, перенаправляем на логин
    if (!isAuthenticated) {
        navigate('/login');
        return null;
    }

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h2>{t('dashboardTitle', { username: user?.username || 'User' })}</h2>
            <p>{t('dashboardWelcome')}</p>

            {/* Кнопка выхода */}
            <button
                onClick={handleLogout}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    marginBottom: '20px',
                }}
            >
                {t('logoutButton')}
            </button>

            {/* Отображение меню Starbucks */}
            <h3>{t('menuTitle')}</h3>
            {isLoading && <p>{t('loading')}</p>}
            {error && <p style={{ color: 'red' }}>{t('error', { message: error.message || 'Failed to load menu' })}</p>}
            {menu && (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {menu.items?.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                padding: '10px',
                                borderBottom: '1px solid #ddd',
                            }}
                        >
                            {item.name} - ${item.price || 'N/A'}
                        </li>
                    ))}
                </ul>
            )}

            {/* Ссылки на другие страницы */}
            <div style={{ marginTop: '20px' }}>
                <Link to="/menu" style={{ marginRight: '15px' }}>
                    {t('viewFullMenu')}
                </Link>
                <Link to="/profile">{t('viewProfile')}</Link>
            </div>
        </div>
    );
};

export default DashboardPage;