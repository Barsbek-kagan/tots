import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux'; // Import for dispatching actions if needed
// import your actions from redux toolkit, e.g. from './redux/actions'

const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // If you want to dispatch actions, for example, logging out

    useEffect(() => {
        // Redirect to login page when the component is mounted
        navigate('/register');
    }, [navigate]);

    return (
        <div>
            {/* You can put a loading spinner or any content while navigating */}
            <h1>Redirecting...</h1>
        </div>
    );
};

export default HomePage;
