import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/itemStyles.css'

export default function Items({objetos}) {    
    return (
        <div className="item">
            {   objetos && objetos.length ?             
                    objetos.map((item)=>
                        <div key={item.id} className='cardItem-item'>
                            <Link to={`/item/${item.id}`}>
                                <img src={item.img} className='img rotate-hor-center'/>
                                <h5 className='title-item'>{item.name}</h5>
                                <p className="price-item">${item.price}</p>
                            </Link>
                        </div>
                        
                    )
                    :
                    <div>  LOADING</div>  
             }
        </div>
    )
}
