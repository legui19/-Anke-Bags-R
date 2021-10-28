import React from 'react';
import { Link } from 'react-router-dom';

function Saludo () {
    return (
        <div>
            <h1>Gracias por tu compra</h1>
            <Link to={'/'} className='links'>
                    <button>Volver a comprar</button>
            </Link>    
        </div>
        
    );
};
export default Saludo;