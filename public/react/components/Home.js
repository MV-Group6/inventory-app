import React from 'react';
import { useState } from 'react';
import apiURL from '../api';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export const Home = () => {
    const [inputs, setInputs] = useState({})

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

    async function handleSubmit(event){
      event.preventDefault();
      try {
        const {title, description, category, price} = inputs
        const res = await fetch(apiURL + "/items", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description,
            category,
            price
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

    async function signUpHandler(e) {
      e.preventDefault();
      
    }

    return <>
    <h1>Home</h1>
        <Popup trigger={<button> Create an Item </button>} position="right center">
        <div>
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
    <div>
      </div>
      <div>
      <br></br>
      <br></br>
      <button>Remove an item</button>
      <form >
        <label>Enter the item you'd like to remove:
        <input 
          type="text" 
        />
        </label>
      </form>
      </div>
      <br></br>
      <div>
      <button>Update an item</button>
      <form >
        <label>Enter the item you'd like to update:
        <input 
          type="text" 
        />
        </label>
      </form>
    </div>
    </>
}