import React from 'react';

const ItemDetail = ({item}) => {
    return (
        <>
            <h2>{item.identificador} </h2>
            <h2>{item.nombre} </h2>
            <h2>{item.precio} </h2>
        </>
    );
}

export default ItemDetail;
