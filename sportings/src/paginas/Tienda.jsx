import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from '../componentes/Inicio';
import Carrusel from '../componentes/Carrusel';
import Footer from '../componentes/Footer';
import Partedos from '../componentes/Tarjeta/Partedos';
import { ItemList } from "../componentes/ItemList";

import { NavBar } from "../componentes/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "../componentes/ShoppingCart";
import { ShoppingCartProvider } from "../contexts/ShoppingCartContext";
const Tienda = () => {
  return (
    <div>
        <header >
          <NavBar />
        </header>
        <body>
          <div>
            <Carrusel />
          </div>
          <div className='m-6'> 
          <ItemList />
          </div>
        </body>
        <footer>
                  <Footer />
                </footer>
    </div>
  )
}

export default Tienda