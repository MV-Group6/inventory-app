import React from 'react';
import { Itemdiv } from './Items';

export const Electronics = ({items}) => {
    return <>
        {
            items.map((item, idx) => {
                if (item.category == "electronics") {
                    return <Itemdiv item={item} key={idx} />
                }
            })
        }
    </>
}