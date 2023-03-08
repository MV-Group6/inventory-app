import React from 'react';
import '/style.css';

const NavBar = () => {
    return (
        <nav>
            <label class='logo'>Shop With Us</label>
            <ul>
                <li><a href="#">Men's Clothing</a></li>
                <li><a href="#">Women's Clothing</a></li>
                <li><a href="#">Jewelry</a></li>
                <li><a href="#">Electronics</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;