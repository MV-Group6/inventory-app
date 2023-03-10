import React from 'react';
import { useState } from 'react';
import apiURL from '../api';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export const Home = () => {
    const [inputs, setInputs] = useState({})

    //Save user input for other functions to use
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      if (name === 'category') {
        if(value == "1"){
        setInputs(values => ({...values, category: "men's clothing"}))}
        else if(value == "2"){
          setInputs(values => ({...values, category: "women's clothing"}))}
          else if(value == "3"){
            setInputs(values => ({...values, category: "electronics"}))}
            else if(value == "4"){
              setInputs(values => ({...values, category: "jewelry"}))}
      } else {
        setInputs(values => ({...values, [name]: value}))
      }
    }

    //Lets user sublit the created item
    async function handleSubmit(event){
      event.preventDefault();
      try {
        const {title, description, category, price, image} = inputs
        const res = await fetch(apiURL + "/items", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description,
            category,
            price, 
            image
          }),
        });
        const data = await res.json();
        if (res.status === 200) {
          setInputs(data);
        } else {
          alert("Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
      console.log(inputs);
    }

    //Home display 
  return <>
    <h1>Home</h1>
    <div className="card-container">
      <div className="card">
        <h2>Men's Clothing</h2>
        <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="Men's Clothing" />
        <a href="./Mens">Shop Now</a>
      </div>
      <div className="card">
        <h2>Women's Clothing</h2>
        <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="Women's Clothing" />
        <a href="./Womens">Shop Now</a>
      </div>
      <div className="card">
        <h2>Jewelry</h2>
        <img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" alt="Jewelry" />
        <a href="./Jewel">Shop Now</a>
      </div>
      <div className="card">
        <h2>Electronics</h2>
        <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="Electronics" />
        <a href="./Electronics">Shop Now</a>
      </div>
    </div>
    <Popup trigger={<button> Create an Item </button>} position="center" width={500}>
      <div style={{ width: '100%' }}>
        <form>
          <label>Enter a Product Title you'd like to add:
            <input 
              type="text"
              name="title"
              value={inputs.title || ""}
              onChange = {handleChange}
            />
          </label>
          <br></br>
          <label>Enter a Product description you'd like to add:
            <input 
              type="text"
              name="description"
              value={inputs.description || ""}
              onChange = {handleChange}
            />
          </label>
          <br></br>
          <label>Enter a Product Price you'd like to add:
            <input 
              type="text" 
              name="price"
              value={inputs.price || ""}
              onChange = {handleChange}
            />
          </label>
          <br></br>
          <label>Choose a category (Men's Clothing : 1, Woman's Clothing : 2, Electronics: 3, Jewelry: 4):
            <input type="string" name='category' value={inputs.category || ""} onChange={handleChange}></input>
          </label>
          <br></br>
          <label>Enter an Image URL you'd like to add:
            <input 
              type="text"
              name="image"
              value={inputs.image || ""}
              onChange = {handleChange}
            />
          </label>
          <br></br>
          <button onClick={handleSubmit}>Add an item</button>
        </form>
      </div>
    </Popup>
  </>
}