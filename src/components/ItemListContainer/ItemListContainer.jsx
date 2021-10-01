import React from "react";
import "./ItemListContainer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import ItemList from "../ItemListContainer/ItemList"
import {useParams} from 'react-router-dom';

//***imposible hacer que me lea el arrays con productos ubicados en ../data/productos, aun con los mismos nombres
//que indico el profe de las varibles/funciones (getFetch, promise(res,rej),etc***

//import {getFetch} from '../../utils/Mock'
//import {getItem} from '../../Data/productos'


const productos = [
    { identificador: "1_CAR_CARUZO_CUE", nombre: "Cartera Caruzo", precio: 5950, categoria: "Cartera", "especificaciones": "Cartera Cuero Marron claro", Img: "Img/productos/CARTERA_CARUZO.jpg", destacado: true },
    { identificador: "2_CAR_CRO_BOR_", nombre: "Cartera Milan", precio: 5200, categoria: "Cartera", "especificaciones": "Cartera Cuero Borgoña de croco, con cierre", Img: "Img/productos/CARTERA_MILAN.jpg", "destacado": true },
    { identificador: "3_CAR_OR+BR_", nombre: "Cartera Amalfi", precio: 4650, categoria: "Cartera", "especificaciones": "Cartera Cuero Naranja de croco y Dorado con Brillo, con Cierre", Img: "Img/productos/CARTERA_AMALFI.jpg", "destacado": true },
    { identificador: "4_BAND_BELLA_AZUL", nombre: "Bandolera Bella", precio: 2850, categoria: "Bandolera", "especificaciones": "Bandolera Bella Azul y franja plateada con brillo, forrado por dentro y correa negra CON cierre", Img: "Img/productos/BANDOLERA_BELLA.jpg", "destacado": true },
    { identificador: "5_BAND_CRO_ORAN+BLCK_", nombre: "Bandolera Sorrento", precio: 3000, categoria: "Bandolera", "especificaciones": "Bandolera de Croco Naranja y franja negro, forrado por dentro y correa negra CON cierre", Img: "Img/productos/BANDOLERA_SORRENTO.jpg", "destacado": true },
    { identificador: "6_SOB_PELO_GRIS_", nombre: "Sobre Firenze", precio: 2100, categoria: "Sobre", "especificaciones": "Sobre de Peluche Gris, con cierre", Img: "Img/productos/SOBRE_FIRENZE.jpg", "destacado": true },
    { identificador: "7_BILL_MUJ_CUE_AZUL_", nombre: "Billetera Capri", precio: 3700, categoria: "Billetera", "especificaciones": "Billetera Mujer de Cuero Azul Oscuro y cierre Azul, con capacidad para tarjetas y forrada por dentro", Img: "Img/productos/BILLETERA_CAPRI.jpg", "destacado": true },
    { identificador: "8_BILL_HOM_CUE_MAR_", nombre: "Billetera Agata", precio: 2500, categoria: "Billetera", "especificaciones": "Billetera Hombre de Cuero Marron, con capacidad para tarjetas", Img: "Img/productos/BILLETERA_AGATA.jpg", "destacado": true },
    { identificador: "9_BOL_LONA_AREN_", nombre: "Bolso Venezia", precio: 2350, categoria: "Bolso", "especificaciones": "Bolso Lona Playero Arena con manija de cuero, forrado por dentro, detalle en cuero marron en la base SIN cierre", Img: "Img/productos/BOLSO_VENEZIA.jpg", "destacado": true },
    { identificador: "10_RIN_NIZA_CUE CHOC", nombre: "Riñonera Niza", precio: 2200, categoria: "Riñonera", "especificaciones": "Riñonera de Cuero color chocolate", Img: "Img/productos/RIÑONERA_NIZA.jpg", "destacado": true },
    { identificador: "11_BOL_LONA_FUCSIA_", nombre: "Bolso Pisa", precio: 2750, categoria: "Bolso", "especificaciones": "Bolso Lona Playero Fucsia con manija de cuero, forrado por dentro, detalle en cuero negro en la base SIN cierre", Img: "Img/productos/BOLSO_PISA.jpg", "destacado": true },
    { identificador: "12_BOL_LONA_PLAY_SALM_", nombre: "Bolso Cadiz", precio: 2300, categoria: "Bolso", "especificaciones": "Bolso Lona Playero Salmon con manijas acharoladas Salmon, forrado por dentro, con compartimento aparte CON cierre", Img: "Img/productos/BOLSO_CADIZ.jpg", "destacado": true }
];

const getFetch = new Promise((res, rej) => {
    //con la promesa simulo que estoy trayendo datos de una base de datos y me puede generar demoras, entonces puedo probar si el frontend funciona ok cuando no tengo aun el backend
    //acciones asincronicas se ejecutan a lo ultimo de las sincronicas, es como si la salteara aun teniendo un settimeout de 0 milisegundo
    let respuesta = '200'
    if (respuesta === '200') {
        setTimeout(() => {
            res(productos);
        }, 2000)
    } else {
        rej('404 not found')
   }
});

getFetch.then(() => {
    productos.map(producto => {
        <div key={producto.identificador}>
            <div> {producto.nombre} </div>
            <div> {producto.categoria} </div>
            <img src={producto.Img} alt="foto" />
            <div> {producto.precio} </div>
            <button>Detalles</button>
        </div>
    })
})


function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria} = useParams ()




    //Para evitar que el renderizado infinito me afecte la vista de la pagina de usurio, evito que se visualice
    useEffect(() => {
        //llamada a una API dentro de un useEffect para evitar el que renderizado me afecte la vista
        if(idCategoria){
            getFetch
            .then(resp => {
                setProductos( resp.filter(producto => producto.categoria === idCategoria) )
            })
            //los errores de la promesa rechazada arriba (rej)lo capturo aca para manener la funcionalidad de la pagina (Para que siga funcionando)
            .catch(error => { console.log(error) })
            //Si pongo el finally con el set loading en el booleano contrario, lo que hace es que pase de marcar "cargando pagina" a visualizarla    
            .finally(() => setLoading(false))
        }else{
            getFetch
            .then(resp => {
                setProductos(resp)
            })
            //los errores de la promesa rechazada arriba (rej)lo capturo aca para manener la funcionalidad de la pagina (Para que siga funcionando)
            .catch(error => console.log(error))
            //Si pongo el finally con el set loading en el booleano contrario, lo que hace es que pase de marcar "cargando pagina" a visualizarla    
            .finally(() => setLoading(false))
        }
    },[idCategoria])

    console.log(idCategoria);


    //Para que el usuario al ingresar, mientras se carga la pagina no pierda "paciencia", podemos poner un booleano en el loading para...
    //como no pude levantar el getItem no funciona el componente ItemList
    return (
        <div>
            <p>{greeting}</p>


            {loading ? <h3>Cargando página...</h3> : productos.map(producto => <div key={producto.identificador} className="card w-50 mt-3" >
                  <div className="card-header"> {producto.nombre} </div>
                  <div className="card-body"> {producto.categoria} </div>
                  <img className="w-60" src={producto.Img} alt="foto" />
                  <div className="card-footer"> {producto.precio} </div>
                 <button className="btn btn-outline-primary btn-block" onClick={() => setLoading(!loading)}>Detalles</button>

            </div>)}
        </div>

    )
}

export default ItemListContainer;


//{loading ? <h3>Cargando página...</h3> : <ItemList productos={productos} />}

        // <div>
        //     <p>{greeting}</p>


        //     {loading ? <h3>Cargando página...</h3> : productos.map(producto => <div key={producto.identificador} className="card w-50 mt-3" >
        //          <div className="card-header"> {producto.nombre} </div>
        //          <div className="card-body"> {producto.categoria} </div>
        //          <img className="w-60" src={producto.Img} alt="foto" />
        //          <div className="card-footer"> {producto.precio} </div>
        //         <button className="btn btn-outline-primary btn-block" onClick={() => setLoading(!loading)}>Detalles</button>

        //     </div>)}
        // </div> */}

        // <div>
        //     <p>{greeting}</p>


        //     {loading ? <h3>Cargando página...</h3> : <ItemList productos={productos} />}

        // </div>