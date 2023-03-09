import React from 'react';
import { useState } from 'react';
import apiURL from '../api';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export function Single (props) {
  
  
  const [inputs, setInputs] = useState({});
  const [isEditing, setIsEditing] = useState(false); // new state variable

  const loggedIn = window.localStorage.getItem("UserID")
  console.log(loggedIn, "login")

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
      setInputs(values => ({ ...values, [name]: value }));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(apiURL + "/items/" + props.item.id, {
        method: "DELETE",
      });
      if (res.status === 200) {
        console.log("Deleted!")
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdate(event) {
    event.preventDefault();
    try {
      const res = await fetch(apiURL + "/items/" + props.item.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputs)
      });
      if (res.status === 200) {
        console.log("Updated!")
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCart(event){
    event.preventDefault();
    try {
      const itemID= props.item.id;
      const userID = loggedIn;
      const res = await fetch(apiURL + "/carts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userID,
          itemID
          
        }),
      });
      const data = await res.json();
      if (res.status === 200) {
        console.log(data)
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="product-details">
      <div className="product-info">
        <h1 className="product-title">{props.item.title}</h1>
        <div className="product-image">
          <img src={props.item.image} />
        </div>
        <h2 className="product-description">{props.item.description}</h2>
        <h2 className="product-price">Price: £{props.item.price}</h2>
        <div className="product-buttons">
          <button className="back-button" onClick={() => props.setSingle()}>
            Back to {props.item.category}
          </button>
          <button onClick={handleCart} className='view'>Add to Cart</button>
          <button className="delete-button" onClick={handleSubmit}>
            Delete Item? :|
          </button>
          <Popup
            trigger={<button className="edit-button">Edit an Item</button>}
            position="right center"
          >
            {isEditing ? (
              <form>
                <label>
                  Choose a category (Men's Clothing : 1, Woman's Clothing : 2, Electronics: 3, Jewelry: 4):
                  <input
                    type="text"
                    name="category"
                    value={inputs.category || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Title:
                  <input
                    type="text"
                    name="title"
                    value={inputs.title || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Description:
                  <textarea
                    name="description"
                    value={inputs.description || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Price:
                  <input
                    type="number"
                    name="price"
                    value={inputs.price || ""}
                    onChange={handleChange}
                  />
                </label>
                <button type="submit" onClick={handleUpdate}>
                  Update Item
                </button>
              </form>
            ) : (
              <button onClick={() => setIsEditing(true)}>Update an item</button>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
}