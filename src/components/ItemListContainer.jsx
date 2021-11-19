import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
import { getFirestore } from "../services/getFirebase";




const Producto = [

];


export const promesa = new Promise((resolve, reject) => {
    const status = "success"
    if (status === "success") {
        setTimeout(() => {
            resolve(Producto);

        }, 2000);
    } else {
        reject("algo salio mal")
    }
})


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])//array vacio para luego setearlo en productos
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()

    useEffect(() => {

        if (idCategoria) {

            const dbQuery = getFirestore()
            dbQuery.collection('itemss').where('categoriaId', '==', idCategoria).get()
                .then((resu) => { setProductos(resu.docs.map(item => ({ id: item.id, ...item.data() }))) })
                .catch(err => console.error(err))
                .finally(() => setLoading(false));
        } else {

            const dbQuery = getFirestore()
            dbQuery.collection('itemss').get()
                .then((resu) => { setProductos(resu.docs.map(item => ({ id: item.id, ...item.data() }))) })
                .catch(err => console.error(err))
                .finally(() => setLoading(false));
        }

    }, [idCategoria])


    return (
        <>
            <br />
            <h2 className="text-center mt-3" style={{ color: 'orange' }} >Bienvenido Anke & Bags Store </h2>
            <br />
            <br />

            {loading ?
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" className="d-flex justify-content-center">
                        <span className="visually-hidden">Cargando...</span>
                    </Spinner></div> : <ItemList productos={productos} />
            }


        </>
    )
}

export default ItemListContainer