import React from 'react';
import {memo} from 'react'
import Item from './Item';



const ItemList = memo(
    ({ productos }) => {

        console.log('soy item list')
        return (
            <>
                {productos.map(producto => <Item producto={producto} />)}
            </>
        )
    }
)


export default ItemList



