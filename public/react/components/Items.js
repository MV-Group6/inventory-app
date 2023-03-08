import React, { useState } from 'react';
import apiURL from '../api';


export const Itemdiv = (props) => {
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
  return <>
    <h3>{props.item.title}</h3>
    <h4>{props.item.price}</h4>
    <h4>{props.item.description}</h4>
    <img src={props.item.image}/>
    <button onClick={fetchReq}>Click to view</button>

  </>
} 
	