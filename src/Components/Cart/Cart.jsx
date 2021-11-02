import React from 'react';
import { Link } from 'react-router-dom';
// import CheckOutContainer from '../../Containers/CheckOutContainer/CheckOutContainer';
import '../../css/cartStyle.css'

export default function Cart({ cartItems, total, envio, Cant }) {

    return (
        <div className='cartPageStyle'>
            {cartItems && cartItems.length ?
                <div>
                    <h2 className='title-item-detail'> Detalle de tu carrito</h2>
                    <div className='padding-table'>
                        <table className='customers'>
                            <thead style={{ textAlign: 'center' }}>
                                <tr>
                                    <th class='name'>#</th>
                                    <th class='name'>Titulo</th>
                                    <th class='name'>Precio</th>
                                    <th class='name'>Cantidad</th>
                                    <th class='name'>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((item, idx) =>
                                        <tr key={idx}>
                                            <td class='number' >{idx + 1}</td>
                                            <td class='name' >{item.name}</td>
                                            <td class='name' style={{ textAlign: 'center' }}>${item.price}</td>
                                            <td class='name' style={{ textAlign: 'center' }}>{item.qty}</td>
                                            <td class='name' style={{ textAlign: 'center' }}>${item.price * item.qty}</td>
                                        </tr>
                                    )
                                }
                                <tr>
                                    <td>*</td>
                                    <td class='envio' colSpan="3">Envio</td>
                                    <td class='envio' style={{ textAlign: 'center' }}>${envio}</td>
                                </tr>
                                <tr>
                                    <td>*</td>
                                    <td class='envio' colSpan="3">Total</td>
                                    <td class='envio' style={{ textAlign: 'center' }}>${total + 100}</td>
                                </tr>
                                <tr>
                                    <td>*</td>
                                    <td class='envio' colSpan="2">Cant.Productos</td>
                                    <td class='envio' style={{ textAlign: 'center' }}>{Cant}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className=''>
                        <Link to={'/'}>
                            <button className="btn-detail-card"> ir a Home</button>
                        </Link>
                        <Link to={'/checkout/'}>
                            <button className="btn-detail-card links-card"> Comprar</button>
                        </Link>
                    </div>
                </div>
                :
                <div className='noItems'>
                    <h2 className='textNoItems'>
                        No hay nada en tu carrito
                    </h2>
                    <Link to={'/'} className='links-bottom'>
                        <button className="btn-detail"> ir a Home</button>
                    </Link>
                </div>
            }
        </div>
    )
}
