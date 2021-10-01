import React from "react";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";





function NavBar(props) {
    const filtro1='Bandolera'
    const filtro2='Billetera'
    const filtro3='Bolso'
    const filtro4='Cartera'
    const filtro5='Riñonera'
    const filtro6='Sobre'



    return (
        <nav>            
                <ul className="lista">
                <Link to='/Inicio'>
                    <li className="lista-el">{props.menu[0]} </li>
                </Link>
                    <li className="lista-el">{props.menu[1]}</li>

                <Link to='/productos'>
                    <li className="lista-el">{props.menu[2]}</li>
                </Link>
                    <li className="lista-el">{props.menu[3]}</li>
                    <li className="lista-el">{props.menu[4]}</li>
                <Link to='/Cart'>
                    <li className="lista-el">{props.menu[5]}</li>
                </Link>
                </ul>
                <Link to='/Cart'>
                    <CartWidget />
                </Link>

                <ul className="lista">
            <Link to={`/categoria/bandolera`}>    
                <li className= "lista-el">{filtro1}</li>
            </Link>

            <Link to={`/categoria/billetera`}>
                     <li className= "lista-el">{filtro2}</li>
            </Link>

            <Link to={`/categoria/bolso`}>
                    <li className= "lista-el">{filtro3}</li>
            </Link>
                
            <Link to={`/categoria/cartera`}>
                <li className= "lista-el">{filtro4}</li>
            </Link>

            <Link to={`/categoria/riñonera`}>
                <li className= "lista-el">{filtro5}</li>
            </Link>    

            <Link to={`/categoria/sobre`}>
                <li className= "lista-el">{filtro6}</li>
            </Link>    
                
                </ul>

                <h1>Anke&Bags</h1>



        </nav>
    );
}

export default NavBar;