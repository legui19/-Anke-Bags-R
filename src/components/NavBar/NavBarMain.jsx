import React from 'react';
import { useState, useEffect } from 'react';
import CartWidget from './CartWidget';
import './navbar.css';




const NavBarMain = ({ type, setTipo }) => {
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
            <div className={`navStyle-${type}`}>

                <div>
                    <button onClick={handleVip} className="buttonVip">
                        <p className={`to-${type}`}>{vip}</p>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default NavBarMain;

{/* <div className='ul'>
    <NavLink to='/' className='links-nav'><p className='nav-link-nav'>Anke & Bags</p></NavLink>
    <NavLink to='/categories' className='links-nav'><p className='nav-link'>categorias</p></NavLink>
</div> */}
