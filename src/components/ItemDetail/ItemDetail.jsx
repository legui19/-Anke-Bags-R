import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
//import { Col, Row } from "react-bootstrap"



const ItemDetail = ({ item }) => {

    const saludoInicial='Hola soy Item Detail recargado'

    const onAdd = (cantidadToAdd) => {
        console.log(`Ha añadido ${cantidadToAdd}`)
    }


    return (
        <>
            <h2>{saludoInicial} </h2>

            <ItemCount />
            
        </>
    );
}

export default ItemDetail;
{/* <>
    <h2>{item.identificador} </h2>
    <h2>{item.nombre} </h2>
    <h2>{item.precio} </h2>

    <ItemCount initial stock onAdd={onAdd} />
</> */}