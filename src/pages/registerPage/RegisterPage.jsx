import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/slices/authSlice';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.auth);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({ username, password }));
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Registering...' : 'Register'}
                </button>
            </form>
            {status === 'failed' && <p>{error}</p>}
        </div>
    );
};

export default RegisterPage;