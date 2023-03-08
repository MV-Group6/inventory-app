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
        <h1>{props.item.title}</h1>
        <img src={props.item.image} />
        <h2>{props.item.description}</h2>
        <h2>Price : {props.item.price}</h2>
        <button onClick={() => props.setSingle()}>Back to {props.item.category}</button>
        <button onClick={handleSubmit}>Delete Item? :|</button>
        <Popup trigger={<button> Edit an Item </button>} position="right center">
        <button>Update an item</button>
        <form >
        <label>Enter the item you'd like to update:
        <input type="text"/>
        </label>
        </form>
        </Popup>
    </>
}