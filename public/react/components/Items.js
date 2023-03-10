import React, { useState } from 'react';
import apiURL from '../api';

export const Itemdiv = (props) => {
  //Fetch request
  async function fetchReq(){
    try{
      const res = await fetch(apiURL+"/items/"+props.item.id)
      const data = await res.json()
      console.log(data)
      props.setSingle(data)
    }catch (error) {
      console.log(error);
    }
  
  }

  //Items display on the pages
  return <>
    <main>
      <div class="product-container">
        <div class="product-image">
          <img src={props.item.image}/>
        </div>
        <div class="product-details">
          <div class="product-title">
            <h3>{props.item.title}</h3>
          </div>
          <div class="product-price">
            <h4>£{props.item.price}</h4>
          </div>
          <div class="product-button">
            <button class="view" onClick={fetchReq}>Click to view</button>
          </div>
        </div>
      </div>
    </main>
  </>
} 
	