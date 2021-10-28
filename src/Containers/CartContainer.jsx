import React,{ useContext, useState, useEffect } from 'react'
import { Context } from '../Context/CartContext';
import Cart from '../Components/Cart/Cart';
// import firebase from 'firebase/app';
// import { getFirestore } from '../firebase';
// import InputUser from '../Components/InputUser'
import 'firebase/firestore';

export default function CartContainer() {
  const [cartItems] = useContext(Context);
  const [total, setTotal] = useState(0);
  const [envio] = useState(100);

  useEffect(() => {
    cartItems &&
      cartItems.map((item) =>
        setTotal((prevTotal) => prevTotal + item.price * item.qty)
      );
  }, [cartItems]);
 
  return (
    <div>
      <Cart cartItems={cartItems} total={total} envio={envio} />
    </div>
  );
};