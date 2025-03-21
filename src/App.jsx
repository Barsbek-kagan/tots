import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import Dashboard from './pages/DashboardPage.jsx';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/blog"
                    element={
                        <PrivateRoute>
                            <BlogPage />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;