import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import apiURL from '../api';


export const Account = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showthecarts, setShowthecarts] = useState(false);
    const [allCarts, setAllCarts] = useState([]);
    const [allItems, setAllItems] = useState([]);
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
          window.localStorage.setItem("UserID", user.id)
          window.localStorage.setItem("Username", user.username)
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
  async function handleLogout(event){
    event.preventDefault();
    console.log("event is working")
    window.localStorage.setItem("Username", "")
    window.localStorage.setItem("UserID", "")
    window.location.reload(true);
  }
  async function showCart(event) {
    event.preventDefault();
    console.log("event is working");
    const fetchcarts = await fetch(apiURL + "/carts", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const allcarts = await fetchcarts.json();

  
    allcarts.map((cart) => console.log(cart.userID, window.localStorage.getItem("UserID")))
    const filteredCarts = allcarts.filter(cart => cart.userID=== Number(window.localStorage.getItem("UserID")));
    setShowthecarts(true);
    setAllCarts(filteredCarts);
    console.log(filteredCarts);
    getCartItems(filteredCarts);
  }
  async function getCartItems(allcarts) {
    const fetchitems = await fetch(apiURL + "/items", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const allitems = await fetchitems.json();
    const itemIds = allcarts.flatMap(cart => cart.itemID);
    const filtereditems = allitems.filter(item => itemIds.includes(item.id));
    console.log(filtereditems);
    setAllItems(filtereditems);
  }
  
  if (window.localStorage.getItem("Username")!= "" && showthecarts == false) {
    return (
      <div>
        <h1>Welcome, {inputs.username}!</h1>
        <p>You are now logged in.</p>
        <button onClick={showCart}>Show cart</button>
        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  }
  else if (showthecarts){
    let carttitles = [];
    let totalprice = 0;
    for (let i =0; i < allItems.length; i++){
      carttitles.push("Title:" + allItems[i].title)
      carttitles.push(" Description: " + allItems[i].description)
      carttitles.push(" Price: "+allItems[i].price)
    }
    let cartprices = [];
    for (let i =0; i < allItems.length; i++){
      cartprices.push(" Price "+allItems[i].price)
      totalprice+=allItems[i].price
    }

    return (
      <div>
        <h1>Welcome, {inputs.username}!</h1>
        <p>You are now logged in.</p>
        <button onClick={showCart}>Show cart</button>
        <p>Cart displayed here</p>
        <section className='cart'>
          {carttitles.map((item) => (
          <>
          <p key={item.id}>
            {item}
          </p>          
          </>
          ))}
        </section>
        <h2>Total price for cart is : £{totalprice}</h2>
        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  } else {
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
                onChange={handleChange}
              />
            </label>
            <label>
              Password:
              <input
                type="text"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <button onClick={handleSubmit}>Sign Up</button>
          </form>
        </Popup>
        <br />
        <Popup trigger={<button> Log in </button>} position="left center">
          <form>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Password:
              <input
                type="text"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <button onClick={handleLogin}>Log in</button>
          </form>
          </Popup>
        <br></br>
      </>
    );
  }
}
