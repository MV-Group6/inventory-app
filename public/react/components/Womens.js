import React from 'react';
import { Itemdiv } from './Items';

export const Womens = ({items, setSingle}) => {
    return <>
        {
            items.map((item, idx) => {
                if (item.category == "women's clothing") {
                    return <Itemdiv item={item} setSingle={setSingle} />
                }
            })
        }
    </>
}