import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/ButtonGroup'
import { LinkContainer } from 'react-router-bootstrap'
import './styles.css'

const Item = ({ articulos }) => {


    return (
        <>
            {
                <Card style={{ width: '18rem', boxShadow: '8px 14px 5px 0px rgba(0,0,0,0.75)' }} >
                    <Card.Img variant="top" src={articulos.img} alt="fotos" className="h-150 img rotate-hor-center" />
                    <Card.Body className="justify-content text-center">
                        <Card.Title>Producto: {articulos.title}</Card.Title>
                        <Card.Text>
                            <strong> Precio: $ {articulos.precio}</strong>
                        </Card.Text>
                        <LinkContainer to={`/detalle/${articulos.id}`}>
                            <Button className="btn btn-outline-success" >Detalles</Button>
                        </LinkContainer>
                    </Card.Body>

                </Card>
            }


        </>
    )
}

export default Item