import React from 'react';

export function Single (props) {
    return <>
        <h1>{props.item.title}</h1>
        <img src={props.item.image} />
        <h2>{props.item.description}</h2>
        <h2>Price : {props.item.price}</h2>
        <button onClick={() => props.setSingle()}>Back to {props.item.category}</button>
    </>
}