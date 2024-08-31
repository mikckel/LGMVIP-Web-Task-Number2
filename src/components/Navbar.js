import React from 'react';
import './Navbar.css';

const Navbar = ({ onGetUsers }) => {
    return (
        <nav className="navbar">
            <h1 className="brand">MyBrand</h1>
            <button className="get-users-btn" onClick={onGetUsers}>
                Get Users
            </button>
        </nav>
    );
};

export default Navbar;
