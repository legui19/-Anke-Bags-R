import React from 'react';
import '../../css/outCart.css'


export default function CheckOutCart({ product }) {
  return (

    <div  className='itemCartCont'>
      <div className="text-center flex-detail-cart">        
        <div className="title-img"> 
           <img src={product.img} className='img-detail img-cart'/>
        </div>
        <div className='description-name-button'>
          <h3 className='h3-size margin-bottom' > {product.name} </h3>
           <p className="price-detail">${product.price} </p>
           <p className="text-start"> <em>ID de tu producto:</em> {product.id} </p>
           <p className="text-start margin-bottom">{product.description}</p>
           <p className="text-start margin-bottom">Todos nuestros productos son confeccionados con materiales de altisima Calidad. Su producto cuenta con Garantía de Fabricación.</p>
        </div>
      </div>
    </div>
  );
}
