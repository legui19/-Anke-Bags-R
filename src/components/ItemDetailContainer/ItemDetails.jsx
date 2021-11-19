import React from 'react'
import ItemCount from '../ItemCount'
import { useState } from 'react'
import { useCartContext } from '../../Context/cartContext'
import './ItemDetails.css'




const ItemDetails = ({ detail }) => {

    const [cantSeleccionada, setCantidadSeleccionada] = useState(0) //seteo aca el contador
    const [inventSeleccionada, setinventSeleccionada] = useState(0) //seteo aca el contador

    const { addToCard } = useCartContext() //useCartContext

    const onAdd = (cant, inventario) => {

        setCantidadSeleccionada(cant)
        setinventSeleccionada(inventario)
        addToCard({ item: detail, cantidad: cant })
        console.log(cantSeleccionada);
        console.log(inventSeleccionada);

    }

    return (


        <div className='justStyle'>
            <h4 className='title-item-detail'>Detalles del Producto</h4>
            <div className="flex-detail" bg='secondary' text='white' style={{ minHeight: '550px' }}>
                <div className="title-img-detail">
                    <img src={detail.img} className='img-detail' />
                </div>
                <div className='description-name-button-detail'>
                    <h3 className='h3-size margin-bottom'>{detail.title}</h3>
                    <p className="text-start"> {detail.descripcion}</p>
                    <p className="text-start margin-bottom"> Todos nuestros productos son confeccionados con materiales de altisima Calidad. Su producto cuenta con Garantía de Fabricación por 1 año. </p>
                    <p className="price-detail">${detail.precio}</p>
                    <p className="text-start margin-bottom"><em>{detail.stock} en Stock!</em></p>

                    <ItemCount stock={detail.stock} initial={1} onAdd={onAdd} />

                </div>
            </div>
        </div>
    )
}



export default ItemDetails

