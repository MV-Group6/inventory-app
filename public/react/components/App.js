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

	return (
		<>
			<NavBar/>
			{component}
		</>
	)
}
// {!single ? {component} : <Single item = {single}/>}
export default App;

