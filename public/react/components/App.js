import React, { useState, useEffect } from 'react';
import {ItemsList } from './ItemsList';
import NavBar from './NavBar';
import '/style.css'

//Importing pages
import {Home} from './Home';
import {Mens} from './Mens';
import {Womens} from './Womens';
import {Jewel} from './Jewel';
import {Electronics} from './Electronics';
import { SingleImg } from './single';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);

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
			component = <Mens items={items} />
			break
		case "/Womens":
			component = <Womens items={items}/>
			break
		case "/Jewel":
			component = <Jewel items={items}/>
			break
		case "/Electronics":
			component = <Electronics items={items}/>
			break
		case "/single":
			component = <SingleImg items={items}/>
	}

	return (
		<>
			<NavBar/>
			{component}
		</>
	)
}

export default App;

