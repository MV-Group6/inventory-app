import React, { useState, useEffect } from 'react';
import {ItemsList } from './ItemsList';
import NavBar from './NavBar';
import '/style.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

//Importing pages
import {Home} from './Home';
import {Mens} from './Mens';
import {Womens} from './Womens';
import {Jewel} from './Jewel';
import {Electronics} from './Electronics';
import { Single } from './single';


// import and prepend the api url to any fetch calls
import apiURL from '../api';


export const App = () => {

	const [items, setItems] = useState([]);
	const [single, setSingle] = useState();

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	//Front end dev
	let component
	switch (window.location.pathname) {
		case "/Home":
			component = <Home />
			break
		case "/Mens":
			if (!single){
				component = <Mens items={items} setSingle={setSingle} />
			}
			else {
				component = <Single item={single} setSingle={setSingle}/>
			}
			break
		case "/Womens":
			if (!single){
				component = <Womens items={items} setSingle={setSingle}/>
			}
			else {
				component = <Single item={single} setSingle={setSingle}/>
			}
			break
		case "/Jewel":
			if (!single){
				component = <Jewel items={items} setSingle={setSingle}/>
			}
			else {
				component = <Single item={single} setSingle={setSingle}/>
			}
			break
		case "/Electronics":
			if (!single){
				component = <Electronics items={items} setSingle={setSingle}/>
			}
			else {
				component = <Single item={single} setSingle={setSingle}/>
			}
			break
	}

	// LOGIN CODE
	const [inputs, setInputs] = useState({})

    async function handleChange(event){
      const name = event.target.name;
      const value = event.target.value;
	  const fetchusers = await fetch(apiURL + "/items", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	  })
	  const allusers = await fetchusers.json();
	  console.log(allusers)
	  allusers.map((user) => {
		if (user.username) {
			console.log("Username already exists")
			/*then if password matches name in table then redirect to home*/
		}
	  })
      if (allusers.includes(value) && name == "username") {
		console.log("Username already exists")
        /*then if password matches name in table then redirect to home*/
      } else {
        setInputs(values => ({...values, [name]: value}))
      }
    }

    async function handleSubmit(event){
      event.preventDefault();
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


	return (
		<>
			<NavBar />
			<main>
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
						<button>Log in</button>
				</form>
				</Popup >
				{component}
			</main>
			
		</>
	)
}
// {!single ? {component} : <Single item = {single}/>}
export default App;

