import React from 'react';
import { Itemdiv } from './Items';

export const Mens = ({items}) => {
    return <>
        {
            items.map((item, idx) => {
                if (item.category == "men's clothing") {
                    return <Itemdiv item={item} key={idx} />
                }
            })
        }
    </>
}