import React from 'react';
import '/style.css';
import { useState } from 'react';
const NavBar = () => {
    const [username, setUsername] = useState(window.localStorage.getItem("Username"))
    return (
        <nav>
            <label className='logo'>Shop With Us</label>
            <label>Welcome {username}</label>
            <ul>
                <li><a href="./Home">Home</a></li>
                <li><a href="./Mens">Men's Clothing</a></li>
                <li><a href="./Womens">Women's Clothing</a></li>
                <li><a href="./Jewel">Jewelry</a></li>
                <li><a href="./Electronics">Electronics</a></li>
                <li><a href="./account">Account</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;