import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import CartWidget from "./CartWidget";
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from "react-router-dom";
import { useCartContext } from '../../Context/cartContext'



function NavBar(props) { //recibo count desde APP.jsx
  const { count } = props; //destructuring saco count de props
  const { itemInCart } = useCartContext();//viene de cartContext
  return (
    <>
      <Navbar bg="ligth" expand="lg" >
        <Container>
          <Link to="/">
            <Navbar.Brand><i className="fas fa-bags-shopping"> Anke & Bags Store</i></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <LinkContainer to={`/categoria/Cartera`}>
                <Nav.Link href="#link">Cartera</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/categoria/Bolso">
                <Nav.Link href="#link">Bolso</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/categoria/Sobre">
                <Nav.Link href="#link">Sobre</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/categoria/Billetera">
                <Nav.Link href="#link">Billetera</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/categoria/Bandolera">
                <Nav.Link href="#link">Bandolera</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/categoria/Riñonera">
                <Nav.Link href="#link">Riñonera</Nav.Link>
              </LinkContainer>
            </Nav>

            <Form className="d-flex">

              <br />



            </Form>
          </Navbar.Collapse>
          <Link to="/Cart">
            {itemInCart()}
            <CartWidget count={count} />
          </Link>
        </Container>


      </Navbar>

    </>

  );
}

export default NavBar;
