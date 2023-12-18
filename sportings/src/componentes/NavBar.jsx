import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IoCart } from "react-icons/io5";
import Nav from 'react-bootstrap/Nav';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";


export const NavBar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "#79C6C6",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">SPORTHINGS</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Tienda">Inicio</Nav.Link>
            <Nav.Link href="Producto">Productos</Nav.Link>

            <Nav.Link> <FaUserAlt /> </Nav.Link>
          </Nav>
          <MdOutlineShoppingCart />
        </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        <a className="btn btn-info" href="/">Cerrar sesion</a>

        <Link to={"/cart"}>
        <IoCart /> <span className="">{quantity}</span>

</Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
};
