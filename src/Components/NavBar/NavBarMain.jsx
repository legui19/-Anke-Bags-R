import React from 'react';
import '../NavBar/NavBarMain.css'

const NavBarMain = () => {
    
const menu1= "inicio";
const menu2= "¿Como Comprar?";
const menu3= "Productos";
const menu4= "Sobre Nosotros";
const menu5= "Contacto";
const menu6= "Mi Carrito";
    
    return (
        <div>
            <nav>
                <ul className="lista">

                    <li className="lista-el">{menu1} </li>

                    <li className="lista-el">{menu2}</li>

                    <li className="lista-el">{menu3}</li>

                    <li className="lista-el">{menu4}</li>
                    <li className="lista-el">{menu5}</li>

                    <li className="lista-el">{menu6}</li>
                </ul>
            </nav>

        </div>
    );
}

export default NavBarMain;
