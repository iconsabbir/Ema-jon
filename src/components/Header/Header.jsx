import React from 'react';
import './Header.css';
import Logo from '../../assets/Logo.png';

const Header = () => {
    return (
        <div className="header">
        <div className="container">
            <div className="header__logo">
                <img src={Logo} alt="" />
            </div>
            <div className="header__link">
                <ul>
                    <li></li>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/prodect">Prodect</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/login">LogIn</a></li>
                    <li><a href="/signup">SignUp</a></li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Header;