import React from "react";
import { ItemList } from "./componentes/ItemList";
import { Navbar } from "./componentes/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./componentes/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import Home from "./paginas/Home";
import Login from "./paginas/Login";
import Login2 from "./paginas/Login2";
import Tienda from "./paginas/Tienda";
import Productos from "./paginas/Productos";
export const App = () => {
  return (
    <ShoppingCartProvider>
        <Router>
        <Routes>  
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Login2" element={<Login2 />}></Route>
          <Route exact path="/Tienda" element={<Tienda />}></Route>
          <Route path="/Tienda" element={<ItemList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/Producto" element={<Productos />} />
        </Routes>
        </Router>
    </ShoppingCartProvider>
  );
};

export default App;
