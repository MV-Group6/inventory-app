import React from 'react';
import '/style.css';
import { useState } from 'react';
const NavBar = () => {
    const [username, setUsername] = useState(window.localStorage.getItem("Username"))
    return (
        //NavBar for all pages
        <nav>
            <input type="checkbox" id="check"/>
            <label for="check" className='checkbtn'>
                <i class="fa fa-bars"></i>
            </label>
            <label className='logo'>Shop With Us</label>
            <ul>
                <li><a href="./Home">Home</a></li>
                <li><a href="./Mens">Men's Clothing</a></li>
                <li><a href="./Womens">Women's Clothing</a></li>
                <li><a href="./Jewel">Jewelry</a></li>
                <li><a href="./Electronics">Electronics</a></li>
                <li><a href="./account">Account</a></li>
            </ul>
            <br></br>
            <label className='helloUser'>Welcome {username}</label>
        </nav>
    );
};

export default NavBar;