import React from 'react'
import Contador from '../../Containers/CountContainer'
import { Link } from 'react-router-dom';
import '../../css/itemDetail.css'


export default function ItemDetail({ item, loading, contador, setContador, handleComprar }) {

    return (
        loading ?
            <div>Loading...</div>
            :
            <div>
                <h4 className='title-item-detail'>Detalles del Producto</h4>
                <div className="flex-detail" bg='secondary' text='white' style={{ minHeight: '550px' }}>
                    <div className="title-img-detail">
                        <img src={item.img} className='img-detail' />
                    </div>
                    <div className='description-name-button-detail'>
                        <h3 className='h3-size margin-bottom'>{item.name}</h3>
                        <p className="text-start"> {item.description}</p>
                        <p className="text-start margin-bottom"> Todos nuestros productos son confeccionados con materiales de altisima Calidad. Su producto cuenta con Garantía de Fabricación por 1 año. </p>
                        <p className="price-detail">${item.price}</p>
                        <p className="text-start margin-bottom">{item.stock} en Stock!</p>
                        <div className="contadorItem">
                            <Contador className='width-200px' min={0} max={item.stock} contador={contador} setContador={setContador}>Agregar</Contador>
                        </div>
                        {
                            contador > 0 ?
                                <div>
                                    <Link to={'/cart/'}>
                                        <button className='btn-detail' onClick={handleComprar}>Comprar {contador}</button>
                                    </Link>
                                    <div>
                                        <Link to={'/'} className='links'>
                                            <button className='btn-detail margin-bottom-400px margin-left-detail'> Volver al Inicio</button>
                                        </Link>
                                    </div>
                                </div>
                                :
                                <div>
                                    <button className='btn-detail' onClick={() => setContador(contador + 1)}>Agregar</button>
                                    <Link to={'/'} className='links'>
                                        <button className='btn-detail margin-bottom-400px margin-left-detail'> Volver al Inicio</button>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
    )
}
