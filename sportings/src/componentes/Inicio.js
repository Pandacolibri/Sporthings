import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";



export default function Inicio(){
  
    return(
        <div>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">SPORTHINGS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Tienda">Inicio</Nav.Link>
            <Nav.Link href="">Productos</Nav.Link>
            <Nav.Link href="">Carrito</Nav.Link>
            <Nav.Link href="">Ofertas del dia</Nav.Link>

            <Nav.Link> <FaUserAlt /> </Nav.Link>
          </Nav>
          <MdOutlineShoppingCart />
          <btn className="btn btn-info">Cerrar sesion</btn>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
        </div>
    )
}