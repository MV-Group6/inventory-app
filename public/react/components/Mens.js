import React from 'react';
import { Itemdiv } from './Items';

export const Mens = ({items, setSingle}) => {
    return <>
        {
            items.map((item, idx) => {
                if (item.category == "men's clothing") {
                    return <Itemdiv item={item} setSingle={setSingle} key ={idx} />
                }
            })
        }
    </>
}