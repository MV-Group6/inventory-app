import React from 'react';
import { SingleImg } from './single';

export const Itemdiv = (props) => {

  return <>
    <h3>{props.item.title}</h3>
    <h4>{props.item.price}</h4>
    <h4>{props.item.description}</h4>
    <a alt={props.item.title} > <img src={props.item.image}/> </a>
  </>
} 
	