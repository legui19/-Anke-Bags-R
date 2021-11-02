import React, { useState,useContext,useEffect } from 'react';
import { Context } from "../../Context/CartContext";
import CheckOutCart from "../../Components/CheckOutCart/CheckOutCart";
import firebase from 'firebase/app';
import { getFirestore } from '../../firebase/getFirebase';
import { Link } from 'react-router-dom';
import '../../css/input.css'

export default function CheckOutContainer() {
  const [cartItems] = useContext(Context);
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState([]);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);
  const [email, setEmail] = useState("");
  const [conEmail, setConEmail] = useState("");
  

  
  useEffect(() => {
    cartItems &&
      cartItems.map((item) =>
        setTotal((prevTotal) => prevTotal + item.price * item.qty)
      );
      
  }, [cartItems]);

  const addOrder = () => {
    const db = getFirestore();
    const orders = db.collection("orders");

    const buyer = { name, email,conEmail};
    const items = cartItems;
    
    const newOrder = {
      buyer,
      items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total:total,
    };

    orders.add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
      })
      .catch((error) => {
        // setError(error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

   const onNameChange =(evento) => {
    setName(evento.target.value)
  }
  const onEmailChange =(evento)=>{
    setEmail(evento.target.value)
  }
  const confonEmailChange =(evento)=>{
    setConEmail(evento.target.value)
  }
  return (
    <div> 
    <h2 className='title-item-out'>Detalle de compra</h2>
      {cartItems.map((product) => (
          <CheckOutCart key={product.id} product={product}/>          
                    ))}
                <Link to={'/'}>
                    <button className='btn-detail-out'>ir al Inicio</button>
                </Link>      
    <h2 className='margin-top'>Deja tus datos y confirma tu compra</h2>   
      <form  className='form margin-bottom-300px'>   
      <div className='form-group d-flex'>
        <label className="text-start">nombre</label>
        <input  type="text" name="name" value={name} onChange={onNameChange} placeholder="Nombre y Apellido" />
      </div> 
      <div className='form-group d-flex'>
        <label className="text-start">email</label>
        <input type="email" name="email" value={email} onChange={onEmailChange} placeholder="mail@ejemplo.com"/>
      </div>   
      <div className='form-group d-flex'>
        <label className="text-start"> Confirma tu email</label>
        <input type="email" name="conEmail" value={conEmail} onChange={confonEmailChange} placeholder="mail@ejemplo.com"/>
      </div>
        <Link to={'/gracias/'}>
        <button onClick={addOrder} className='btn-detail-out'>Confirmar y Comprar</button>
       </Link>
      </form>
         
    </div>
  );
}
