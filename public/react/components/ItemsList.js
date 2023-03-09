import React from 'react';
import { Itemdiv } from './Items';

export const ItemsList = ({items, setSingle}) => {
	return <>
		{
			items.map((item) => {
				return <Itemdiv item={item} setSingle={setSingle}/>
			})
		}
	</>
} 
