import React from 'react';
import { Itemdiv } from './Items';

export const ItemsList = ({items}) => {
	return <>
		{
			items.map((item, idx) => {
				return <Itemdiv item={item} key={idx} />
			})
		}
	</>
} 
