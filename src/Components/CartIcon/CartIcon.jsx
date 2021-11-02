import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './cartIconStyle.css'
import CartContainer from '../../Containers/CartContainer';



const CartIcon =(props)=> {       

    return (
        <div>
            <Link to ='/cart'>
            <img className="img-cw" src="https://image.flaticon.com/icons/png/512/107/107831.png"/>
            
            </Link> 
            <p>{props.greeting} {props.name}</p>  
        </div>
    )
}

export default CartIcon;
//<span className="CartNumber">{Cant ()} </span>