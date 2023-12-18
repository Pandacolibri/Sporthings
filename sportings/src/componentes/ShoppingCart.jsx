import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import ReactDOM from "react-dom"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export const ShoppingCart = ({ name, price, id, descripcion, imgUrl }) => {
  const createOrder = (data, actions) => {
    return actions.order.create({
        purchase_units: [{
            amount: {
                value: totalPrice
            }
        }
        ]
    });
};
const onApprove = (data,actions) => {
    return actions.order.capture();
};

  


  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );



  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a href="Tienda" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continua
                        Comprando
                      </a>
                    </MDBTypography>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Sporthings</p>
                    <p className="mb-0">Tu estas comprando {quantity} productos de nuestra tienda</p>
                  </div>
                  <div>
                    <p>
                      <span className="text-muted">Sort by:</span>
                      <a href="#!" className="text-body">
                        price
                        <MDBIcon fas icon="angle-down mt-1" />
                      </a>
                    </p>
                  </div>
                </div>
                  </MDBCol>
                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Ingresa los datos de tu tarjeta
                          </MDBTypography>
                      
                        </div>

                        <p className="small">Tipo de carta</p>
                        <a href="#!" type="submit" className="text-white">
                          <FaCcVisa />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <FaCcMastercard />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <FaCcPaypal />
                        </a>
                        <hr />
                        <div className="d-flex justify-content-between">
                      <p className="mb-2">Total:</p>
                      <p className="mb-2">${totalPrice}</p>
                    </div>
                    <PayPalButton
                createOrder={(data,actions) => createOrder(data,actions)}
                onApprove={(data,actions) => onApprove(data,actions)}
            />

                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
