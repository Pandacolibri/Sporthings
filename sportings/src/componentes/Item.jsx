import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import Card from 'react-bootstrap/Card';
import {
  MDBCard,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
export const Item = ({ name, price, id, descripcion, imgUrl }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price, }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
<MDBRow className='col-md-3'>
 <MDBCol>
    <MDBCard className='m-2'>
      <img src={imgUrl} width="335" height="290" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>

        <div className="item-price">${price}</div>
        <MDBRow className='row-cols-1 row-cols-md-1 g-1'>
          {quantityPerItem === 0 ? (
            <button className="btn btn-info btn-lg btn-block" onClick={() => addToCart()}>
              Agregar Producto
            </button>
          ) : (
            <button className="btn btn-secondary" onClick={() => addToCart()}>
              Agregar mas
            </button>
          )}

          {quantityPerItem > 0 && (
            <button className="btn btn-danger" onClick={() => removeItem(id)}>
              Quitar producto
            </button>
          )}
        </MDBRow>
      </Card.Body>
    </MDBCard>
 </MDBCol>
</MDBRow>
  );
};
