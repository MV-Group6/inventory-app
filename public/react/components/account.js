import React, { useState, useEffect } from 'react';
import '/style.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import apiURL from '../api';

export const Account = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    // LOGIN CODE
	const [inputs, setInputs] = useState({})

    async function handleChange(event){
      const name = event.target.name;
      const value = event.target.value;
	  setInputs(values => ({...values, [name]: value}))
    }

    async function handleSubmit(event){
      event.preventDefault();
	  const fetchusers = await fetch(apiURL + "/users", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	  })
	  const allusers = await fetchusers.json();
	  console.log(allusers)
	  allusers.map((user) => {
		if (user.username == (inputs.username)) {
			console.log("Username already exists");
			/*then if password matches name in table then redirect to home*/
			const retry = window.prompt("Username already exists. Please try again.", inputs.username);
			if (retry) {
				inputs.username = retry;
				handleSubmit(event); // recursively call the handleSubmit function with the updated username
			}
			throw new Error("Username already exists");
				}
	  })
      try {
        const {username, password} = inputs
        const res = await fetch(apiURL + "/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
			password
          }),
        });
        const data = await res.json();
        if (res.status === 200) {
			console.log(data)
          	setInputs(data);
        } else {
          alert("Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
      console.log(inputs);
    }
	async function handleLogin(event){
		event.preventDefault();
		console.log("event is working")
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({...values, [name]: value}))
		const fetchusers = await fetch(apiURL + "/users", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		  })
		const allusers = await fetchusers.json();
		allusers.map((user) => {
			if (user.username == inputs.username) {
				if (user.password == inputs.password){
					console.log("Logged in!")
					setLoggedIn(true);
				}
				else {
					console.log("The password is incorrect!")
				}
			}
			else {
				console.log("User does not exist")
			}
		})
	}
    return (
        <>
            <h1>Login Page</h1>
            <Popup trigger={<button> Create</button>} position="right center">
                <form onSubmit={handleSubmit}>
                        <label>
                        Username:
                        <input 
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange = {handleChange}/>
                        </label>
                        <label>
                        Password:
                        <input 
                        type="text"
                        name="password"
                        value={inputs.password || ""}
                        onChange = {handleChange}
                        />
                        </label>
                        <br></br>
                        <button onClick={handleSubmit}>Sign Up</button>
                </form>
                </Popup >
                <br></br>
                <Popup trigger={<button> Log in </button>} position="left center">
                <form>
                        <label>
                        Username:
                        <input 
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange = {handleChange} 
                        />
                        </label>
                        <label>
                        Password:
                        <input 
                        type="text"
                        name="password"
                        value={inputs.password ||  ""}
                        onChange = {handleChange}
                        />
                        </label>
                        <br></br>
                        <button onClick={handleLogin}>Log in</button>
                </form>
                </Popup >
            
        </>
    )
}