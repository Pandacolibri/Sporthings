import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
}
from 'mdb-react-ui-kit';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Login(){
  const [nombre_cliente, setNombre] = useState('');
  const [apellido_p, setApellido_p] = useState('');
  const [apellido_m, setApellido_m] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post("http://localhost:8081/register",{
      nombre_cliente:nombre_cliente,
      apellido_p:apellido_p,
      apellido_m:apellido_m,
      correo:correo,
      contraseña:contraseña
    }).then(res => {
      if(res.data.Status === "Success") {
        navigate('/Login2')
      } else {
        alert("Error");
      }
    })
    .then(err => console.log(err));
  }
 
    return (
        <div className="Login">
          <form onSubmit={handleSubmit}>
                          <MDBContainer fluid>

              <div className="p-6 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '20px'}}></div>

              <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '10px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
                <MDBCardBody className='p-5 text-center'>

                  <h2 className="fw-bold mb-5">REGISTRATE</h2>

                  <MDBRow>
                    <MDBCol col='6'>
                      <MDBInput wrapperClass='mb-4' label='Nombre' id='nombre_cliente' type='text'  value={nombre_cliente} onChange={(event)=>{
                          setNombre(event.target.value);
                        }} required/>
                    </MDBCol>

                    <MDBCol col='6'>
                      <MDBInput wrapperClass='mb-4' label='Apellido Paterno' id='apellido_p' type='text' value={apellido_p} onChange={(event)=>{
                        setApellido_p(event.target.value);
                      }} required/>
                    </MDBCol>
                    <MDBCol col='6'>
                      <MDBInput wrapperClass='mb-4' label='Apellido Materno' id='apellido_m' type='text' value={apellido_m} onChange={(event)=>{
                        setApellido_m(event.target.value);
                      }} required/>
                    </MDBCol>
                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Email' id='correo' type='email' value={correo}  onChange={(event)=>{
                    setCorreo(event.target.value);
                  }} required/>
                  <MDBInput wrapperClass='mb-4' label='Password' id='contraseña' type='password' value={contraseña} onChange={(event)=>{
                    setContraseña(event.target.value);
                  }} required/>

                <button className='btn btn-warning'>Registrate</button>
                 <p>Ya tienes cuenta? <a href='Login2'>INICIA SESION</a> </p>

                </MDBCardBody>
              </MDBCard>

              </MDBContainer>

                  </form>
        </div>
    );
}