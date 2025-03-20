import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/authSlice.js';
import AuthForm from '../../components/AuthForm.jsx';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, error } = useSelector((state) => state.auth);

    const handleRegister = (formData) => {
        dispatch(registerUser(formData)).then((result) => {
            if (result.meta.requestStatus === 'fulfilled') {
                navigate('/dashboard', { replace: true });
            }
        });
    };

    return <AuthForm onSubmit={handleRegister} isLogin={false} status={status} error={error} />;
};

export default RegisterPage;