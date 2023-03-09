import React from 'react';
import '/style.css';

const NavBar = () => {
    return (
        <nav>
            <label className='logo'>Shop With Us</label>
            <ul>
                <li><a href="./Home">Home</a></li>
                <li><a href="./Mens">Men's Clothing</a></li>
                <li><a href="./Womens">Women's Clothing</a></li>
                <li><a href="./Jewel">Jewelry</a></li>
                <li><a href="./Electronics">Electronics</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;