import React from "react";
//import storeItems from "../data/products.json";
import { Item } from "./Item";
import { useState, useEffect } from 'react';
import axios from 'axios';


export const ItemList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      const obtenerData = async () => {
          try {
              const respuesta = await axios.get('http://localhost:8081/visualizar');
              setData(respuesta.data);
          } catch (error) {
              console.error('Error al obtener los datos:', error);
          }
      };

      obtenerData();
  }, []);

  return (
    <div className="items-list">
      {data.map((product, idx) => {
        return <Item key={product.id}{...product} />;
      })}
    </div>
  );
};
