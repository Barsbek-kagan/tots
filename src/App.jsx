import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;