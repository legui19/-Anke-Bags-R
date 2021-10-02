import React from 'react';
import {useState} from 'react'
import { Link } from 'react-router-dom'

//Situación para cuando el elemento productos pueda devolver los parametros item, stock.
//const ItemCount = ({stock, initial, onAdd})


const ItemCount = () => {
    let initial=1
    let stock= 5

    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(false)

    const itemCountAdd =()=>{
        if(count < stock)  setCount(count + 1)        
    }

    const itemCountRemove =()=>{
        if(count > initial) setCount(count - 1)
    }   

     const handlerOnAdd=()=>{
         setCount(initial)
         setCambiarBoton(true)
         window.confirm('¿Desea Continuar?')
     }

    return (
        <div className="w-10">
            <p>{`Producto Seleccionado:`} </p>
            <p>{`Cartera Caruso`} </p>
            <p>{`Cantidad Seleccionada:`} </p>
            <strong>{count}</strong>
            <br />
            
            <button className="btn btn-outline-primary" onClick={itemCountRemove}>-</button>
            <button className="btn btn-outline-primary" onClick={itemCountAdd}>+</button>
            {
                cambiarBoton ? 
                    <div>
                        <Link to='/cart'>
                            <button className="btn btn-outline-primary btn-block">Terminar mi Compra</button>
                        </Link>
                        <Link to='/productos'>
                            <button className="btn btn-outline-primary btn-block">Seguir Comprando</button>
                        </Link>
                    </div>
                :
                     
                <button className="btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Agregar al Carrito</button> 
            }     
        </div>           
    )
}


export default ItemCount


