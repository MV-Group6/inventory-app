import React from 'react';
import apiURL from '../api';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export function Single (props) {
    async function handleSubmit(event){
        event.preventDefault();
        try {
          const res = await fetch(apiURL + "/items/" + props.item.id , {
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
  
      async function signUpHandler(e) {
        e.preventDefault();
        
    }

    return <>
      <div className="product-details">
        <div className="product-info">
          <h1 className="product-title">{props.item.title}</h1>
          <div className="product-image">
            <img src={props.item.image} />
          </div>
          <h2 className="product-description">{props.item.description}</h2>
          <h2 className="product-price">Price: {props.item.price}</h2>
          <div className="product-buttons">
            <button className="back-button" onClick={() => props.setSingle()}>Back to {props.item.category}</button>
            <button className="delete-button" onClick={handleSubmit}>Delete Item? :|</button>
            <Popup trigger={<button className="edit-button"> Edit an Item </button>} position="right center">
              <button>Update an item</button>
              <form >
                <label>Enter the item you'd like to update:
                  <input type="text"/>
                </label>
              </form>
            </Popup>
          </div>
        </div>
      </div>
    </>
}