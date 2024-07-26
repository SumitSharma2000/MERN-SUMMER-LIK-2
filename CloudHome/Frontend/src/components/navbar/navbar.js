import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { slicelogout } from '../../store/slice/authSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuthorized = useSelector((state) => state.auth.isAuthorized);

    const handleLogout = () => {
        dispatch(slicelogout());
    };

    return (
        <div className="navbar-container">
            <div className="navbar-left-item">
                <h3>CloudHome</h3>
            </div>
            <div className="navbar-right-items">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/about" className="navbar-link">About</Link>
                {isAuthorized ? (
                    <>
                        <Link className="navbar-link" onClick={handleLogout}>Logout</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="navbar-link">Login</Link>
                        <Link to="/signup" className="navbar-link">Signup</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
