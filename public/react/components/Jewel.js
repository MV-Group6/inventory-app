import React from 'react';
import { Itemdiv } from './Items';

export const Jewel = ({items, setSingle}) => {
    return <>
        {
            items.map((item, idx) => {
                if (item.category == "jewelery") {
                    return <Itemdiv item={item} setSingle={setSingle}  key ={idx} />
                }
            })
        }
    </>
}