import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import Dashboard from './pages/DashboardPage.jsx';
import BlogPage from './pages/BlogPage'; // Импортируем новую страницу
import PrivateRoute from './components/PrivateRoute';
import HomePage from "./pages/HomePage.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
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
                    path="/"
                    element={
                        <PrivateRoute>
                            <HomePage />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;