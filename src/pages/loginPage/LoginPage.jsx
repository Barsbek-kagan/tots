import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '../../redux/authSlice.js';
import AuthForm from '../../components/AuthForm.jsx';

        const LoginPage = () => {
            const dispatch = useDispatch();
            const navigate = useNavigate();
            const location = useLocation();
            const { status, error } = useSelector((state) => state.auth);

            const from = location.state?.from?.pathname || '/dashboard';

            const handleLogin = (formData) => {
                console.log('Guest login data:', formData); // Отладка
                dispatch(loginUser(formData)).then((result) => {
            console.log('Login result:', result); // Отладка
            if (result.meta.requestStatus === 'fulfilled') {
                navigate(from, { replace: true });
            }
        });
    };

    return <AuthForm onSubmit={handleLogin} isLogin={true} status={status} error={error} />;
};

export default LoginPage;