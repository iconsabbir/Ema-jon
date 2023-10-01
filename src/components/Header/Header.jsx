import React, { useContext } from 'react';
import './Header.css';
import Logo from '../../assets/Logo.png';
import { AuthContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch((error) => {

            });

    }
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="header__link">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/prodect">Prodect</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                        <li><Link to="/login">LogIn</Link></li>

                        {
                            user?.uid ? <li><button onClick={handleLogout} className="btn btn-outline btn-info" to="/login">LogOut</button></li> :
                                <li><Link to="/login"></Link></li>
                        }
                        <div className="w-10 photo-url">
                            <img className='rounded-full' src={user?.photoURL} alt="" />
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;