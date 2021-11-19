import Item from "./Item"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const ItemList = ({ productos }) => {


    return (
        <>
            <Container fluid>
                <Row xs={1} sm={2} md={3} lg={4} className="g-6 justify-content-center">

                    {productos.map(articulos => (
                        <Col xs={8} md={3} key={articulos.id} className='mt-3'>
                            <Item articulos={articulos} />
                        </Col>)
                    )}
                </Row>

            </Container>
        </>
    )
}

export default ItemList
