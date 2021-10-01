import React from 'react';
//import { useCartContext } from "../../context/cartContext";


const Cart = () => {
    const { carList, deleteFromCart } = useCartContext()
    return (
        <div>
            <p>Hola soy carrito</p>
            {carList.map(item => <div key={item.id}>
                <h2>{item.item.name}</h2>
                <button onClick={() => deleteFromCart(item)} >x</button>
            </div>)}

        </div>
    );
}

export default Cart;
