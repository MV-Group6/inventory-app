import React from 'react';
import { Itemdiv } from './Items';

export const Jewel = ({items}) => {
    return <>
        {
            items.map((item, idx) => {
                if (item.category == "jewelery") {
                    return <Itemdiv item={item} key={idx} />
                }
            })
        }
    </>
}