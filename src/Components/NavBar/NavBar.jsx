import React from 'react';
import { NavLink } from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon';
import { useState,useEffect } from 'react';
import '../../css/navbar.css'
import NavBarMain from './NavBarMain';

export default function NavBar ({type, setTipo }) {

    const [vip, setVip] = useState("Inicia sesion");
    const [user, setUser] = useState("");

    useEffect(() => {
        const nombre = setTimeout(() => {
            setUser("Bienvenido")
        }, 2000);
        return () => clearTimeout(nombre);
      }, []);
    
      const handleVip = () => {
        if (type === "inicia") {
          setTipo("cerrar");
          setVip("cerra sesion");
        } else {
          setTipo("inicia");
          setVip("Inicia sesion");

        }
      };
      
    return (
        <header className="nb-fix">
          <NavBarMain/>
            <div className={`navStyle-${type}`}>                     
                        <div className='ul'>                    
                            <NavLink to='/' className='links-nav'><p className='nav-link-nav'>Anke & Bags</p></NavLink>
                            <NavLink to='/categories' className='links-nav'><p className='nav-link'>categorias</p></NavLink>
                        </div>
                        <div>
                          <CartIcon name={user} />
                          <button onClick={handleVip} className="buttonVip">
                                <p className={`to-${type}`}>{vip}</p>
                          </button>
                        </div>  
            </div>    
        </header>
    );
}