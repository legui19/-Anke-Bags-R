import { useState } from 'react'
import {createContext} from 'react'

export const Context = createContext();

const CartContext = (props) => {

    const [cartItems, setCartItems] = useState([])    
    

    return (
        <Context.Provider value={[cartItems, setCartItems]}>
            {props.children}
        </Context.Provider>
    )
}

export default CartContext;