import React from 'react'
import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/ButtonGroup'
import { LinkContainer } from 'react-router-bootstrap'



const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)
    const [inventario, setInventario] = useState(stock)
    const [cambiarBoton, setCambiarBoton] = useState(true)



    function Agregar() {
        if (inventario > 0) {
            setCount(count + 1)
            setInventario(inventario - 1)


        }

    }
    function restart() {
        if (count > 0) {
            setCount(count - 1)
            setInventario(inventario + 1)

        }

    }
    const agregarCarrito = () => {
        onAdd(count, inventario)
        setCambiarBoton(false);
    }
    return (
        <div>

            <Card.Text>
                <b>Stock:</b> {inventario} <br />
                <strong>Cant:</strong> {count}

            </Card.Text>

            {cambiarBoton ?
                <>
                    <Button className="btn btn-outline-danger" onClick={restart}>-</Button>
                    <Button className="btn btn-outline-primary" onClick={agregarCarrito}>Agregar al carrito</Button>
                    <Button className="btn btn-outline-info" onClick={Agregar}>+</Button>
                </>
                :
                <>
                    <LinkContainer to={'/'}>
                        <Button className="btn btn-outline-info btn-block">Continuar Compra</Button>
                    </LinkContainer>
                    <LinkContainer to={'/cart'}>
                        <Button className="btn btn-outline-primary btn-block mt-2" >Finalizar Compra</Button>
                    </LinkContainer>
                </>
            }






        </div>
    )
}

export default ItemCount