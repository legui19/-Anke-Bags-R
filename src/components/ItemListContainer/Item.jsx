import React from 'react';
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <div key={producto.identificador} className="card w-50 mt-3" >
            <div className="card-header"> {producto.nombre} </div>
            <div className="card-body">
                <img src={producto.Img} alt="foto" />
            </div>
            <div className="card-footer">
                <Link to={`/detalle/${producto.identificador}`}>
                    <button className="btn/detalle/${} btn-outline-primary btn-block">Detalles</button>
                </Link>
            </div>
        </div>

    )
}

export default Item
